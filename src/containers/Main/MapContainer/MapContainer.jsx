import React, {useEffect} from 'react';
import {Map, YMaps} from "react-yandex-maps";


import styles from './MapContainer.module.css';
import MapLine from "../../../components/Map/MapLine/MapLine";
import StopPlacemark from "../../../components/UI/Map/StopPlacemark/StopPlacemark";

import * as actions from '../../../store/actions';
import {connect} from "react-redux";

const MapContainer = (props) => {
    console.log(props);

    const {selectedRouteId, fetchRoutePathById} = props;

    useEffect(() => {
        console.log("Effect called");
        if (selectedRouteId) {
            fetchRoutePathById(selectedRouteId, true);
            fetchRoutePathById(selectedRouteId, false);
        }
    }, [selectedRouteId, fetchRoutePathById, props.routePath])

    const drawRoute = (route, color) => {
        const lineList = [];
        for (let i = 0; i < route.length - 1; i++) {
            lineList.push(<MapLine color={color}
                                   id={route[i].id}
                                   startX={route[i].xPos}
                                   startY={route[i].yPos}
                                   finishX={route[i + 1].xPos}
                                   finishY={route[i + 1].yPos}/>)
        }
        return lineList;
    }

    const generateStopPlacemarks = () => {
        if (props.stopList) {
            return props.stopList.map(stop => {
                return <StopPlacemark id={stop.id} xPos={stop.xPos} yPos={stop.yPos} name={stop.name}/>
            })
        }
    }

    return (
        <YMaps>
            <Map defaultState={props.mapInitialState} className={styles.Map}>
                {props.isRouteVisible && props.visibleRoutePathForward ? drawRoute(props.visibleRoutePathForward, '#3498db') : null}
                {props.isRouteVisible && props.visibleRoutePathBackward ? drawRoute(props.visibleRoutePathBackward, '#ff0000') : null}
                {props.areStopsVisible && props.selectedRouteId ? generateStopPlacemarks() : null}
            </Map>
        </YMaps>
    );
};

const getStopList = (state) => {
    const stopList = [];

    if (state.stopReducer.selectedRouteStopList) {
        const stateStopList = state.stopReducer.selectedRouteStopList.stopList;

        stateStopList.idList.forEach(stopId => stopList.push(stateStopList.byId[stopId]));

        return stopList;
    }
}

const mapStateToProps = (state) => {
    return {
        mapInitialState: state.mapReducer.mapInitialState,
        isRouteVisible: state.mapReducer.isRouteVisible,
        visibleRoutePathForward: state.mapReducer.visibleRoutePathForward,
        visibleRoutePathBackward: state.mapReducer.visibleRoutePathBackward,
        selectedRouteId: state.routeReducer.selectedRouteId,
        areStopsVisible: state.mapReducer.areStopsVisible,
        stopList: getStopList(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRoutePathById: (routeId, isDirectionForward) => dispatch(actions.fetchRoutePathById(routeId, isDirectionForward))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);