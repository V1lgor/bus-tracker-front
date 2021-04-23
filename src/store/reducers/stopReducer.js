import * as actionTypes from './../actions/actionTypes';
import produce from "immer";
import {normalize} from "normalizr";
import Stop from "../entities/Stop";
import RouteStop from "../entities/RouteStop";

const initialState = {
    stopListVisible: false,
    stopList: {
        byId: {},
        idList: []
    },
    filteredStopList: null,
    selectedRouteStopList: null
}

const normalizeStopList = (stopList) => {
    const normalizedStopList = normalize(stopList, [Stop]);

    return {
        byId: normalizedStopList.entities.stop,
        idList: normalizedStopList.result
    }
}

const stopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_STOP_LIST: {
            return produce(state, (draftState) => {
                draftState.stopList = normalizeStopList(action.stopList);
            });
        }
        case actionTypes.TOGGLE_STOP_LIST_VISIBILITY: {
            return produce(state, (draftState) => {
                draftState.stopListVisible = !draftState.stopListVisible
            })
        }
        case actionTypes.FILTER_STOP_LIST_BY_NAME_TEMPLATE:
            const filteredStopList = [];

            state.stopList.idList.forEach(stopId => {
                const currentStop = state.stopList.byId[stopId];

                if (currentStop.name.toLowerCase().startsWith(action.nameTemplate.toLowerCase())) {
                    filteredStopList.push(currentStop);
                }
            });

            return produce(state, (draftState) => {
                draftState.filteredStopList = normalizeStopList(filteredStopList);
            })
        case actionTypes.CLEAR_STOP_LIST_FILTER: {
            return produce(state, (draftState) => {
                draftState.filteredStopList = null;
            })
        }
        case actionTypes.SET_ROUTE_STOP_LIST: {
            return produce(state, (draftState) => {
                const normalizedRouteStopList = normalize(action.routeStopList, [RouteStop]);

                const stopIdList = [];

                for (let id in normalizedRouteStopList.entities.stop) {
                    stopIdList.push(parseInt(id));
                }

                draftState.selectedRouteStopList = {
                    stopList: {
                        byId: normalizedRouteStopList.entities.stop,
                        idList: stopIdList
                    },
                    routeStopInfoList: {
                        byId: normalizedRouteStopList.entities.routeStop,
                        idList: normalizedRouteStopList.result
                    }
                }

                console.log(draftState.selectedRouteStopList);
            })
        }
        default:
            return state;
    }
};

export default stopReducer;