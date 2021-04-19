import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import Schedule from '../components/Schedule/Schedule';

import * as actions from '../store/actions/';

import styles from './ScheduleContainer.module.css';
import Spinner from "../components/UI/Spinner/Spinner";

const ScheduleContainer = (props) => {

    const {selectedSchedule, routeId, fetchRouteScheduleByRouteId} = props;

    const [loadingSchedule, setLoadingSchedule] = useState(true);

    useEffect(() => {
        fetchRouteScheduleByRouteId(routeId);
    }, [routeId, fetchRouteScheduleByRouteId]);

    useEffect(() => {
        if (selectedSchedule) setLoadingSchedule(false);
    }, [selectedSchedule, loadingSchedule])

    let spinner = null;

    if (loadingSchedule) {
        spinner = <Spinner/>
    }

    let schedule = null;
    let scheduleError = null;

    if (props.selectedSchedule) {
        if (props.selectedSchedule.schedule.length === 0) {
            scheduleError = <p>Извините, расписание данного маршрута еще не заполнено.</p>
        } else {
            schedule =
                <Schedule
                    routeNumber={props.selectedSchedule.route.number}
                    startStop={props.selectedSchedule.route.startStop}
                    lastStop={props.selectedSchedule.route.lastStop}
                    schedule={props.selectedSchedule.schedule}
                />
        }
    }
    if (props.scheduleError) {
        scheduleError = <p>Ошибка загрузки расписания.</p>
    }

    return (
        <div className={styles.ScheduleContainer}>
            {spinner}
            {schedule}
            {scheduleError}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedSchedule: state.scheduleReducer.selectedSchedule,
        scheduleError: state.scheduleReducer.scheduleError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRouteScheduleByRouteId: (routeId) => dispatch(actions.fetchRouteScheduleByRouteId(routeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
