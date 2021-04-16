import * as actionTypes from '../actions/actionTypes';

export const checkLogPass = (login, password) => {
    return {
        type: actionTypes.CHECK_LOGIN_PASSWORD,
        login,
        password
    };
};