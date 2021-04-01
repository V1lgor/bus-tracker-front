import axios from 'axios';

import * as actionTypes from './actionTypes';

const fetchStopListSync = (stopList) => {
    return {
        type: actionTypes.FETCH_STOP_LIST,
        stopList
    };
};

export const toggleStopListVisibility = () => {
    return {
        type: actionTypes.TOGGLE_STOP_LIST_VISIBILITY
    }
}

export const filterStopListByNameTemplate = (nameTemplate) => {
    return {
        type: actionTypes.FILTER_STOP_LIST_BY_NAME_TEMPLATE,
        nameTemplate
    }
}

export const clearStopListFilter = () => {
    return {
        type: actionTypes.CLEAR_STOP_LIST_FILTER
    }
}

export const fetchStopList = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/stops')
            .then(response => response.data)
            .then(stopList => dispatch(fetchStopListSync(stopList)))
    };
};