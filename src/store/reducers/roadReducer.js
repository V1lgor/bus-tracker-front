import * as actionTypes from './../actions/actionTypes';
import {normalize} from "normalizr";
import {RoadNode} from "../entities/RoadNode";
import produce from "immer";

const initialState = {
    fullRoadGraph: null
};

const roadReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ROAD_GRAPH: {

            const normalizedGraph = normalize(action.roadGraph, [RoadNode]);

            const fullRoadGraph = {
                byId: {},
                idList: normalizedGraph.result
            };

            for (let nodeId in normalizedGraph.entities.node) {
                const plainNode = {
                    ...normalizedGraph.entities.node[nodeId].node,
                    neighboursIds: normalizedGraph.entities.node[nodeId].neighboursIds
                };

                fullRoadGraph.byId[plainNode.id] = plainNode;
            }


            return produce(state, (draftState) => {
                draftState.fullRoadGraph = fullRoadGraph;
            });
        }
        default:
            return state;
    }
};

export default roadReducer;