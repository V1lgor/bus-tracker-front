import React from 'react';
import {Map, YMaps} from "react-yandex-maps";
import PropTypes from "prop-types";

import styles from './RoadNodeMap.module.css';
import RoadNode from "./RoadNode/RoadNode";
import MapLine from "../../Map/MapLine/MapLine";
import StopPlacemark from "../../UI/Map/StopPlacemark/StopPlacemark";

const RoadNodeMap = (props) => {
    console.log(props);
    const mapInitialState = props.defaultState || {
        center: [51.517366, 46.070179],
        controls: [],
        zoom: 13
    };

    const generateRoadNodes = () => {
        if (props.roadGraph)
            return props.roadGraph.idList.map(roadNodeId => {
                const roadNode = props.roadGraph.byId[roadNodeId];
                return (<RoadNode key={roadNode.id}
                                  id={roadNode.id}
                                  xPos={roadNode.xPos}
                                  yPos={roadNode.yPos}/>)
            })
    }

    const generateRoadLines = () => {
        if (props.roadGraph) {
            const roadLines = [];
            props.roadGraph.idList.forEach(roadNodeId => {
                const roadNode = props.roadGraph.byId[roadNodeId];

                roadNode.neighboursIds.forEach(neighbourId => {
                    const neighbourNode = props.roadGraph.byId[neighbourId];
                    const line = <MapLine id={`${roadNodeId};${neighbourId}`}
                                          startX={roadNode.xPos}
                                          startY={roadNode.yPos}
                                          finishX={neighbourNode.xPos}
                                          finishY={neighbourNode.yPos}
                                          hintContent={`От узла ${roadNodeId} к узлу ${neighbourId}`}/>;
                    roadLines.push(line);
                })
            })
            return roadLines;
        }
    }

    const generateStopPlacemarks = () => {
        if (props.stopList) {
            return props.stopList.idList.map(stopId => {
                const stop = props.stopList.byId[stopId];
                return <StopPlacemark id={stop.id} xPos={stop.xPos} yPos={stop.yPos} name={stop.name}/>
            })
        }
    }

    return (
        <YMaps>
            <Map defaultState={mapInitialState} className={styles.RoadNodeMap}>
                {props.showNodes ? generateRoadNodes() : null}
                {props.showLines ? generateRoadLines() : null}
                {props.showStops ? generateStopPlacemarks() : null}
            </Map>
        </YMaps>
    );
};

RoadNodeMap.propTypes = {
    defaultState: PropTypes.object,
    roadGraph: PropTypes.array.isRequired,
    showLines: PropTypes.bool,
    showStops: PropTypes.bool,
    showNodes: PropTypes.bool
}

export default RoadNodeMap;