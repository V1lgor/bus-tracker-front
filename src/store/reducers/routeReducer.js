import * as actionTypes from './../actions/actionTypes';
import produce from "immer";

const initialState = {
    routeList: [],
    routeListVisible: false,
    filteredRouteList: null
}

const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ROUTE_LIST: {
            return produce(state, (draftState) => {
                draftState.routeList = action.routeList;
            });
        }
        case actionTypes.TOGGLE_ROUTE_LIST_VISIBILITY: {
            return produce(state, (draftState) => {
                draftState.routeListVisible = !draftState.routeListVisible
            })
        }
        case actionTypes.FILTER_ROUTE_LIST_BY_NUMBER_TEMPLATE:
            return produce(state, (draftState) => {
                draftState.filteredRouteList = state.routeList.filter(route => {
                    return route.number.startsWith(action.numberTemplate)
                });
            })
        case actionTypes.CLEAR_ROUTE_LIST_FILTER: {
            return produce(state, (draftState) => {
                draftState.filteredRouteList = null;
            })
        }

        default:
            return state;
    }
};


const formConfig = [
    {
        type: "text",
        name: "login",
        label: "Логин: ",
        placeholder: "Введите логин"
    },
    {
        type: "password",
        name: "password",
        label: "Пароль: ",
        placeholder: "Введите пароль"
    },
    {
        type: "dropdown",
        name: "country",
        label: "Страна:",
        options: [
            {
                name: "Russia",
                value: 1
            },
            {
                name: "USA",
                value: 2
            },
        ]
    }
]

export default routeReducer;