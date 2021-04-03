import * as actionTypes from './../actions/actionTypes';
import produce from "immer";
import {normalize} from "normalizr";
import Route from "../entities/Route";

const initialState = {
    routeList: null,
    routeListVisible: false,
    filteredRouteList: null
}

const normalizeRouteList = (routeList) => {
    const normalizedRouteList = normalize(routeList, [Route]);

    return {
        byId: normalizedRouteList.entities.route,
        idList: normalizedRouteList.result
    }
}

const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ROUTE_LIST: {
            return produce(state, (draftState) => {
                draftState.routeList = normalizeRouteList(action.routeList);
            });
        }
        case actionTypes.TOGGLE_ROUTE_LIST_VISIBILITY: {
            return produce(state, (draftState) => {
                draftState.routeListVisible = !draftState.routeListVisible
            })
        }
        case actionTypes.FILTER_ROUTE_LIST_BY_NUMBER_TEMPLATE:
            const filteredRouteList = [];

            state.routeList.idList.forEach(routeId => {
                const currentRoute = state.routeList.byId[routeId];

                if (currentRoute.number.toLowerCase().startsWith(action.numberTemplate.toLowerCase())) {
                    filteredRouteList.push(currentRoute);
                }
            });

            console.log(filteredRouteList);

            return produce(state, (draftState) => {
                draftState.filteredRouteList = normalizeRouteList(filteredRouteList);
            })
        case actionTypes.CLEAR_ROUTE_LIST_FILTER: {
            return produce(state, (draftState) => {
                draftState.filteredRouteList = null;
            })
        }

        default:
            return state;
    }
};

export default routeReducer;