import * as actionTypes from './../actions/actionTypes';
import produce from "immer";
import {normalize} from "normalizr";
import Route from "../entities/Route";
import RouteType from "../enums/RouteType";

const initialState = {
    routeListLoaded: false,
    routeList: {
        all: {
            byId: {},
            idList: []
        },
        "COMMUTER": {},
        "CITY": {},
        "INTERCITY": {}
    },
    routeListVisible: false,
    filteredRouteList: null,
    selectedRoute: null
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

const routeNumberStartsWith = (routeNumber, template) => {
    console.log(routeNumber, template);
    return routeNumber.toLowerCase().startsWith(template.toLowerCase())
}

const filterRouteListByNumberTemplate = (routeList, numberTemplate) => {
    console.log(routeList);
    if (routeList.hasOwnProperty("byId")) {
        const filteredRouteList = [];

        routeList.idList.forEach(routeId => {
            const currentRoute = routeList.byId[routeId];
            if (routeNumberStartsWith(currentRoute.number, numberTemplate)) {
                filteredRouteList.push(currentRoute);
            }
        })
        console.log(filteredRouteList);
        return filteredRouteList;
    }

    if (routeList instanceof Array)
        return routeList.filter(route => routeNumberStartsWith(route.number, numberTemplate));
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
                draftState.routeList.all = normalizeRouteList(action.routeList);
                draftState.routeListLoaded = true;
            });
        }
        case actionTypes.TOGGLE_ROUTE_LIST_VISIBILITY: {
            return produce(state, (draftState) => {
                draftState.routeListVisible = !draftState.routeListVisible
            })
        }
        case actionTypes.FILTER_ROUTE_LIST_BY_NUMBER_TEMPLATE:
            return produce(state, (draftState) => {
                draftState.filteredRouteList = {};
                for (let routeType in state.routeList) {
                    if (state.routeList.hasOwnProperty(routeType)) {
                        draftState.filteredRouteList[routeType] =
                            normalizeRouteList(
                                filterRouteListByNumberTemplate(state.routeList[routeType], action.numberTemplate)
                            );
                    }
                }

                console.log(draftState.filteredRouteList);
            })
        case actionTypes.CLEAR_ROUTE_LIST_FILTER: {
            return produce(state, (draftState) => {
                draftState.filteredRouteList = null;
            })
        }
        case actionTypes.SET_SELECTED_ROUTE_BY_ID: {
            return produce(state, (draftState) => {
                draftState.selectedRoute = action.route;
            })
        }
        case actionTypes.CLEAR_SELECTED_ROUTE: {
            return produce(state, (draftState) => {
                draftState.selectedRoute = null;
            })
        }
        default:
            return state;
    }
};

export default routeReducer;