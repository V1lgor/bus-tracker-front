import * as actionTypes from './actionTypes';


export const setVisibleRoutePath = (routePath, isDirectionForward) => {
    return {
        type: actionTypes.SET_VISIBLE_ROUTE_PATH,
        routePath,
        isDirectionForward
    }
}

export const setStopDirectionVisibility = (stopDirectionVisibility) => {
    return {
        type: actionTypes.SET_STOP_DIRECTION_VISIBILITY,
        stopDirectionVisibility
    };
};

export const toggleStopVisibility = () => {
    return {
        type: actionTypes.TOGGLE_STOP_VISIBILITY
    }
}

export const toggleRouteVisibility = () => {
    return {
        type: actionTypes.TOGGLE_ROUTE_VISIBILITY
    }
}