import axios from "axios";

import * as actionTypes from '../actions/actionTypes';

const saveRoadGraph = (roadGraph) => {
    return {
        type: actionTypes.FETCH_ROAD_GRAPH,
        roadGraph
    }
}


export const fetchRoadGraph = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/road/full_graph')
            .then(response => response.data)
            .then(roadGraph => {
                console.log(roadGraph);
                dispatch(saveRoadGraph(roadGraph))
            });
    };
};
