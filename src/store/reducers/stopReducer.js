import * as actionTypes from './../actions/actionTypes';
import produce from "immer";

const initialState = {
    stopList: []
}

const stopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_STOP_LIST: {
            return produce(state, (draftState) => {
                draftState.stopList = action.stopList;
            });
        }
        default:
            return state;
    }
};

export default stopReducer;