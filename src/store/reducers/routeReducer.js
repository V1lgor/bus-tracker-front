import * as actionTypes from './../actions/actionTypes';
import produce from "immer";

const initialState = {
    routeList: []
}

const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ROUTE_LIST: {
            return produce(state, (draftState) => {
                draftState.routeList = action.routeList;
            });
        }
        default:
            return state;
    }
};

export default routeReducer;