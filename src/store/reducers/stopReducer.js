import * as actionTypes from './../actions/actionTypes';
import produce from "immer";
import {normalize} from "normalizr";
import Stop from "../entities/Stop";

const initialState = {
    stopListVisible: false,
    stopList: {
        byId: {},
        idList: []
    },
    filteredStopList: null
}

const normalizeStopList = (stopList) => {
    const normalizedStopList = normalize(stopList, [Stop]);

    return {
        byId: normalizedStopList.entities.stop,
        idList: normalizedStopList.result
    }
}

const stopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_STOP_LIST: {
            return produce(state, (draftState) => {
                draftState.stopList = normalizeStopList(action.stopList);
            });
        }
        case actionTypes.TOGGLE_STOP_LIST_VISIBILITY: {
            return produce(state, (draftState) => {
                draftState.stopListVisible = !draftState.stopListVisible
            })
        }
        case actionTypes.FILTER_STOP_LIST_BY_NAME_TEMPLATE:
            const filteredStopList = [];

            state.stopList.idList.forEach(stopId => {
                const currentStop = state.stopList.byId[stopId];

                if (currentStop.name.toLowerCase().startsWith(action.nameTemplate.toLowerCase())) {
                    filteredStopList.push(currentStop);
                }
            });

            return produce(state, (draftState) => {
                draftState.filteredStopList = normalizeStopList(filteredStopList);
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