import * as actionTypes from './../actions/actionTypes';
import produce from "immer";

const initialState = {
    mapInitialState: {
        center: [51.517366, 46.070179],
        controls: [],
        zoom: 13
    },
    isRouteVisible: true,
    visibleRoutePathForward: null,
    visibleRoutePathBackward: null,
    areStopsVisible: true
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBLE_ROUTE_PATH: {
            console.log(action);
            return produce(state, draftState => {
                if (action.isDirectionForward) draftState.visibleRoutePathForward = action.routePath;
                else draftState.visibleRoutePathBackward = action.routePath;
            })
        }
        case actionTypes.SET_STOP_DIRECTION_VISIBILITY: {
            return produce(state, draftState => {
                draftState.stopDirectionVisibility = action.stopDirectionVisibility
            })
        }
        case actionTypes.TOGGLE_STOP_VISIBILITY: {
            return produce(state, draftState => {
                draftState.areStopsVisible = !draftState.areStopsVisible;
            })
        }
        case actionTypes.TOGGLE_ROUTE_VISIBILITY: {
            return produce(state, draftState => {
                draftState.isRouteVisible = !draftState.isRouteVisible;
            })
        }
        default:
            return state;
    }
};

export default mapReducer;