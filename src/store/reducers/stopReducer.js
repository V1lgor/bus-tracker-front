import * as actionTypes from './../actions/actionTypes';
import produce from "immer";
import {normalize} from "normalizr";
import Stop from "../entities/Stop";
import {City} from "../entities/City";

const initialState = {
    stopListVisible: false,
    stopList: {
        cityList: {
            byId: {},
            idList: []
        },
        byId: {},
        idList: []
    },
    filteredStopList: null
}

const stopReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case actionTypes.FETCH_STOP_LIST: {
            return produce(state, (draftState) => {
                const normalizedStopList = normalize(action.stopList, [Stop]);
                const normalizedCityList = normalize(normalizedStopList.entities.city, [City]);

               draftState.stopList = {
                    cityList: {
                        byId: normalizedCityList.entities.city,
                        idList: normalizedCityList.result
                    },
                    byId: normalizedStopList.entities.stop,
                    idList: normalizedStopList.result
                }

                console.log(draftState.stopList);

            });
        }
        case actionTypes.TOGGLE_STOP_LIST_VISIBILITY: {
            return produce(state, (draftState) => {
                draftState.stopListVisible = !draftState.stopListVisible
            })
        }
        case actionTypes.FILTER_STOP_LIST_BY_NAME_TEMPLATE:
            return produce(state, (draftState) => {
                draftState.filteredStopList = state.stopList.filter(stop => {
                    return stop.name.toLowerCase().startsWith(action.nameTemplate.toLowerCase())
                });
            })
        case actionTypes.CLEAR_STOP_LIST_FILTER: {
            return produce(state, (draftState) => {
                draftState.filteredStopList = null;
            })
        }
        default:
            return state;
    }
};

export default stopReducer;