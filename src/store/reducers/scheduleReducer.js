import produce from 'immer';
import * as actionTypes from './../actions/actionTypes';

const initialState = {
    selectedSchedule: null,
};

const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SELECTED_SCHEDULE: {
            return produce(state, (draftState) => {
                draftState.selectedSchedule = action.schedule;
            });
        }
        case actionTypes.CLEAR_SCHEDULE: {
            return produce(state, (draftState) => {
                draftState.selectedSchedule = null;
            });
        }
        default:
            return state;
    }
};

export default scheduleReducer;
