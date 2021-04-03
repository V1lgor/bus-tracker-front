import axios from 'axios';

import * as actionTypes from './actionTypes';

const setSelectedScheduleSync = (schedule) => {
    return {
        type: actionTypes.SET_SELECTED_SCHEDULE,
        schedule,
    };
};

export const setSelectedScheduleRouteId = (routeId) => {
    return {
        type: actionTypes.SET_SELECTED_SCHEDULE_ROUTE_ID,
        routeId
    };
};

export const clearSchedule = () => {
    return {
        type: actionTypes.CLEAR_SCHEDULE
    };
};

export const setScheduleError = (error) => {
    return {
        type: actionTypes.SET_SCHEDULE_ERROR,
        error
    };
};

export const fetchRouteScheduleByRouteId = (routeId) => {
    console.log(routeId);
    return (dispatch) => {
        axios
            .get(`http://localhost:8080/schedule/${routeId}`)
            .then((response) => {
                return response.data;
            })
            .then((schedule) => dispatch(setSelectedScheduleSync(schedule)));
    };
};
