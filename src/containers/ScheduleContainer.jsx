import Schedule from '../components/Schedule/Schedule';

import React from 'react';

import {connect} from 'react-redux';

import styles from './ScheduleContainer.module.css';

const ScheduleContainer = (props) => {

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

export default connect(mapStateToProps, null)(ScheduleContainer);
