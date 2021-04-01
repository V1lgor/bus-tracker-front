import axios from 'axios';

import * as actionTypes from './actionTypes';

const fetchStopListSync = (stopList) => {
    return {
        type: actionTypes.FETCH_STOP_LIST,
        stopList
    };
};

export const fetchStopList = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/stops')
            .then(response => response.data)
            .then(stopList => dispatch(fetchStopListSync(stopList)))
    };
};