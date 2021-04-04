import axios from 'axios';

import * as actionTypes from './actionTypes';
import {normalize} from "normalizr";
import Route from "../entities/Route";
import {setCityList} from "./cityActions";

export const setSelectedRouteByIdSync = (route) => {
    return {
        type: actionTypes.SET_SELECTED_ROUTE_BY_ID,
        route
    };
};

export const setSelectedRouteById = (routeId) => {
    return (dispatch, getState) => {
        const cachedRoute = getState().routeReducer.routeList.all.byId[routeId];
        if (cachedRoute) {
            dispatch(setSelectedRouteByIdSync(cachedRoute));
        }
        else {
            axios.get(`http://localhost:8080/routes/${routeId}`)
                .then(response => response.data)
                .then(route => dispatch(setSelectedRouteByIdSync(route)));
        }
    }
};

export const clearSelectedRoute = () => {
    return {
        type: actionTypes.CLEAR_SELECTED_ROUTE
    };
};

const setRouteList = (routeList) => {
    return {
        type: actionTypes.SET_ROUTE_LIST,
        routeList
    };
};

export const toggleRouteListVisibility = () => {
    return {
        type: actionTypes.TOGGLE_ROUTE_LIST_VISIBILITY
    }
}

export const filterRouteListByNumberTemplate = (numberTemplate) => {
    return {
        type: actionTypes.FILTER_ROUTE_LIST_BY_NUMBER_TEMPLATE,
        numberTemplate
    }
}

export const clearRouteListFilter = () => {
    return {
        type: actionTypes.CLEAR_ROUTE_LIST_FILTER
    }
}

export const fetchRouteList = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/routes')
            .then(response => {console.log(response.data); return response.data})
            .then(routeList => {
                const normalizedRouteList = normalize(routeList, [Route]);
                dispatch(setRouteList(routeList))
                dispatch(setCityList(normalizedRouteList.entities.city));
            })
    };
};
