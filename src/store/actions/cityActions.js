import * as actionTypes from '../actions/actionTypes';

export const setCityList = (cityList) => {
    return {
        type: actionTypes.SET_CITY_LIST,
        cityList
    };
};

