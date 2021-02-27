import axios from 'axios';

import * as actionTypes from './actionTypes';

const fetchRouteListSync = (routeList) => {
    return {
        type: actionTypes.FETCH_ROUTE_LIST,
        routeList
    };
};

export const fetchRouteList = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/routes')
            .then(response => response.data)
            .then(routeList => dispatch(fetchRouteListSync(routeList)))
    };
};
