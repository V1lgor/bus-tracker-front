import * as actionTypes from './../actions/actionTypes';
import produce from "immer";
import {normalize} from "normalizr";
import Route from "../entities/Route";
import RouteType from "../enums/RouteType";

const initialState = {
    routeListLoaded: false,
    routeList: {
        "COMMUTER": {

        },
        "CITY": {

        },
        "INTERCITY": {

        }
    },
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

const filterRouteListByRouteType = (routeList, routeType) => {
    return routeList.filter(route => route.routeType === routeType);
}

const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ROUTE_LIST: {

            const cityRouteList = filterRouteListByRouteType(action.routeList, RouteType.CITY);
            const commuterRouteList = filterRouteListByRouteType(action.routeList, RouteType.COMMUTER);
            const interCityRouteList = filterRouteListByRouteType(action.routeList, RouteType.INTERCITY);

            return produce(state, (draftState) => {
                draftState.routeList[RouteType.CITY] = normalizeRouteList(cityRouteList);
                draftState.routeList[RouteType.COMMUTER] = normalizeRouteList(commuterRouteList);
                draftState.routeList[RouteType.INTERCITY] = normalizeRouteList(interCityRouteList);
                draftState.routeListLoaded = true;
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