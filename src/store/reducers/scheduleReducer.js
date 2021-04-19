import produce from 'immer';
import * as actionTypes from './../actions/actionTypes';

const initialState = {
    selectedScheduleRouteId: 0,
    selectedSchedule: null,
    scheduleError: null
};

const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SELECTED_SCHEDULE_ROUTE_ID: {
            return produce(state, (draftState) => {
                draftState.selectedScheduleRouteId = action.routeId;
            });
        }
        case actionTypes.SET_SELECTED_SCHEDULE: {
            return produce(state, (draftState) => {
                draftState.selectedSchedule = action.schedule;
            });
        }
        case actionTypes.CLEAR_SCHEDULE: {
            return produce(state, (draftState) => {
                draftState.selectedSchedule = null;
                draftState.selectedScheduleRouteId = 0;
            });
        }
        case actionTypes.SET_SCHEDULE_ERROR: {
            return produce(state, (draftState) => {
                draftState.scheduleError = action.error;
            });
        }
        default:
            return state;
    }
};

export default scheduleReducer;
