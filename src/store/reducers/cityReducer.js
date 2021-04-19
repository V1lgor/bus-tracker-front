import * as actionTypes from '../actions/actionTypes';
import produce from "immer";
import {normalize} from "normalizr";
import {City} from "../entities/City";

const initialState = {
    cityList: {
        byId: {},
        idList: []
    }
};

const normalizeCityList = (cityList) => {
    const normalizedCityList = normalize(cityList, [City]);

    return {
        byId: normalizedCityList.entities.city,
        idList: normalizedCityList.result
    };
};

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CITY_LIST: {
            console.log(action);
            return produce(state, (draftState) => {
                draftState.cityList = normalizeCityList(action.cityList)
            })
        }
        default:
            return state;
    }
};

export default cityReducer;