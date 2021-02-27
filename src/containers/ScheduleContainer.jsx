import Schedule from '../components/Schedule/Schedule';

import * as actions from '../store/actions/';

import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import styles from './ScheduleContainer.module.css';

const ScheduleContainer = (props) => {

  const {routeId, loadScheduleById} = props;

  useEffect(() => {
    loadScheduleById(routeId);
  }, [routeId, loadScheduleById]);

  return (
    <div className={styles.ScheduleContainer}>
      {props.selectedSchedule ? (
        <Schedule
          routeNumber={props.selectedSchedule.route.number}
          startStop={props.selectedSchedule.route.startStop}
          lastStop={props.selectedSchedule.route.lastStop}
          schedule={props.selectedSchedule.schedule}
        />
      ) : null}
      <a href="#" className="link">Скачать в формате Excel</a>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSchedule: state.scheduleReducer.selectedSchedule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadScheduleById: (routeId) =>
      dispatch(actions.setSelectedSchedule(routeId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
