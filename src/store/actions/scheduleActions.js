import axios from 'axios';

import * as actionTypes from './actionTypes';

const setSelectedScheduleSync = (schedule) => {
  return {
    type: actionTypes.SET_SELECTED_SCHEDULE,
    schedule,
  };
};
export const setSelectedSchedule = (routeId) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/schedule/${routeId}`)
      .then((response) => {
        return response.data;
      })
      .then((schedule) => dispatch(setSelectedScheduleSync(schedule)));
  };
};
