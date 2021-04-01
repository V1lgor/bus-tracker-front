import * as actionTypes from './../actions/actionTypes';
import produce from "immer";

const initialState = {
    stopListVisible: false,
    stopList: [],
    filteredStopList: null
}

const stopReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case actionTypes.FETCH_STOP_LIST: {
            return produce(state, (draftState) => {
                draftState.stopList = action.stopList;
            });
        }
        case actionTypes.TOGGLE_STOP_LIST_VISIBILITY: {
            return produce(state, (draftState) => {
                draftState.stopListVisible = !draftState.stopListVisible
            })
        }
        case actionTypes.FILTER_STOP_LIST_BY_NAME_TEMPLATE:
            return produce(state, (draftState) => {
                draftState.filteredStopList = state.stopList.filter(stop => {
                    return stop.name.toLowerCase().startsWith(action.nameTemplate.toLowerCase())
                });
            })
        case actionTypes.CLEAR_STOP_LIST_FILTER: {
            return produce(state, (draftState) => {
                draftState.filteredStopList = null;
            })
        }
        default:
            return state;
    }
};

export default stopReducer;