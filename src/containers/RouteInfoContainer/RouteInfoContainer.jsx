import React, {useState, useEffect} from 'react';

import * as actions from '../../store/actions';

import styles from './RouteInfoContainer.module.css';
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import StopList from "./StopList/StopList";
import ExpandableList from "../../components/UI/ExpandableList/ExpandableList";


const RouteInfoContainer = (props) => {
    console.log(props);
    const {routeId, route, selectedRouteId, setSelectedRouteById, fetchRouteStopList} = props;

    const [loadingRoute, setLoadingRoute] = useState(true);

    useEffect(() => {
        if (selectedRouteId !== routeId) setSelectedRouteById(routeId);
    }, [routeId, route, selectedRouteId, setSelectedRouteById]);

    useEffect(() => {
        if (route) setLoadingRoute(false);
    }, [route, loadingRoute]);

    useEffect(() => {
        fetchRouteStopList(route.id);
    }, [fetchRouteStopList, route.id])

    let spinner = null;
    let routeInfo = null;

    const getTripTimeString = (tripTime) => {
        let result = "";

        const hours = Math.floor(tripTime / 60);

        if (hours > 0) result += `${hours} ч. `;

        const minutes = tripTime % 60;

        if (minutes > 0) result += `${minutes} мин.`;

        return result;
    }

    if (loadingRoute) {
        spinner = <Spinner/>
    } else {
        routeInfo =
            <div className={styles.RouteInfo}>
                <div className={styles.RouteNumber}>
                    <h2>Маршрут {route.number}</h2>
                    <p>{route.startStop.name} — {route.lastStop.name}</p>
                </div>
                <div className={styles.RouteDescription}>
                    <h3>Информация о маршруте:</h3>
                    <p>Компания-перевозчик: {route.company.name}</p>
                    <p>Количество единиц транспорта на маршруте: {route.vehicleCount}</p>
                    <p>Протяженность: {route.length} км.</p>
                    <p>Время в пути: {getTripTimeString(route.tripTime)}</p>
                </div>
                <Button text={"Показать расписание"} onClick={() => props.onShowSchedule(routeId)}/>
                <Checkbox label={"Показывать на карте"}
                          name={"showRouteOnMap"}
                          onChange={props.toggleRouteVisibility}
                          checked={props.isRouteVisible}/>
                <Checkbox label={"Показывать остановки"}
                          name={"showRouteOnMap"}
                          onChange={props.toggleStopsVisibility}
                          checked={props.areStopsVisible}/>
                <div className={styles.StopList}>
                    <h3>Список остановок</h3>
                    <ExpandableList title={"В прямом направлении"}
                                    initiallyOpen>
                        <StopList stopInfoList={props.stopInfoList.filter(stop => stop.directionForward)}/>
                    </ExpandableList>
                    <ExpandableList title={"В обратном направлении"}>
                        <StopList stopInfoList={props.stopInfoList.filter(stop => !stop.directionForward)}/>
                    </ExpandableList>
                </div>
            </div>
    }

    return (
        <div className={styles.RouteInfoContainer}>
            {spinner}
            {routeInfo}
        </div>
    );
};

const getSelectedRoute = (state) => {
    const route = state.routeReducer.selectedRoute;

    return {
        ...route,
        startStop: state.stopReducer.stopList.byId[route.startStop],
        lastStop: state.stopReducer.stopList.byId[route.lastStop],
    }
};

const getSelectedRouteStopList = (state) => {
    const stopList = [];

    const stateRouteStopList = state.stopReducer.selectedRouteStopList;
    if (stateRouteStopList) {
        stateRouteStopList.routeStopInfoList.idList.forEach(routeStopId => {
            const stopInfo = stateRouteStopList.routeStopInfoList.byId[routeStopId];
            stopList.push({
                ...stopInfo,
                stop: stateRouteStopList.stopList.byId[stopInfo.stop]
            })
        });
    }
    return stopList;
}

const mapStateToProps = (state) => {
    return {
        route: getSelectedRoute(state),
        stopInfoList: getSelectedRouteStopList(state),
        selectedRouteId: state.routeReducer.selectedRouteId,
        areStopsVisible: state.mapReducer.areStopsVisible,
        isRouteVisible: state.mapReducer.isRouteVisible
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedRouteById: (routeId) => dispatch(actions.setSelectedRouteById(routeId)),
        fetchRouteStopList: (routeId) => dispatch(actions.fetchRouteStopList(routeId)),
        setStopDirectionVisibility: (stopDirectionVisibility) => dispatch(actions.setStopDirectionVisibility(stopDirectionVisibility)),
        onShowSchedule: (routeId) => dispatch(actions.setSelectedScheduleRouteId(routeId)),
        toggleRouteVisibility: () => dispatch(actions.toggleRouteVisibility()),
        toggleStopsVisibility: () => dispatch(actions.toggleStopVisibility())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteInfoContainer);