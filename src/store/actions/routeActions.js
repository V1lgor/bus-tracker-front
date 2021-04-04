import axios from 'axios';

import * as actionTypes from './actionTypes';
import {normalize} from "normalizr";
import Route from "../entities/Route";
import {setCityList} from "./cityActions";

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
                console.log(normalizedRouteList);
                dispatch(setRouteList(routeList))
                dispatch(setCityList(normalizedRouteList.entities.city));
            })
    };
};
