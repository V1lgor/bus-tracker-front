import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import * as actions from '../../../store/actions';

import styles from './RouteDashboard.module.css';
import RouteTable from "../../../components/Dashboard/RouteDashboard/RouteTable/RouteTable";
import ScheduleModal from "./ScheduleModal/ScheduleModal";
import Spinner from "../../../components/UI/Spinner/Spinner";
import RouteInfoModal from "./RouteInfoModal/RouteInfoModal";


const getRouteListToRender = (routeList, cityList) => {
    const routeListToRender = [];

    routeList.all.idList.forEach(routeId => {
        const route = {...routeList.all.byId[routeId]};
        route.city = cityList.byId[route.city];
        routeListToRender.push(route);
    });

    return routeListToRender;
}

const RouteDashboard = (props) => {
    const {routeList, routeListLoaded, fetchRouteList, cityList} = props;

    const [scheduleModalVisible, setScheduleModalVisibility] = useState(false);
    const [shownScheduleRouteId, setShownScheduleRouteId] = useState(0);

    const [routeFullInfoModalVisible, setRouteFullInfoModalVisibility] = useState(false);
    const [shownRouteFullInfoId, setShownRouteFullInfoId] = useState(0);


    const openScheduleModal = (routeId) => {
        setScheduleModalVisibility(true);
        setShownScheduleRouteId(routeId);
    }

    const closeScheduleModal = () => {
        setScheduleModalVisibility(false);
        setShownScheduleRouteId(0);
    }

    const openRouteFullInfoModal = (routeId) => {
        setRouteFullInfoModalVisibility(true);
        setShownRouteFullInfoId(routeId);
    }

    const closeRouteFullInfoModal = () => {
        setRouteFullInfoModalVisibility(false);
        setShownRouteFullInfoId(0);
    }

    useEffect(() => {
        if (!routeListLoaded) fetchRouteList();
    }, [routeListLoaded, fetchRouteList])

    const routeListToRender = routeListLoaded ? getRouteListToRender(routeList, cityList) : [];

    let routeSpinner = null;
    let routeTable = null;

    if (!routeListLoaded) {
        routeSpinner = <Spinner/>
    }
    else {
        routeTable = <RouteTable routeList={routeListToRender}
                                 onShowSchedule={openScheduleModal}
                                 onShowFullRouteInfo={openRouteFullInfoModal}/>
    }

    let scheduleModal = null;

    if (scheduleModalVisible) {
        scheduleModal = <ScheduleModal routeId={shownScheduleRouteId} closeModal={closeScheduleModal}/>
    }

    let routeFullInfoModal = null;

    if (routeFullInfoModalVisible) {
        routeFullInfoModal = <RouteInfoModal routeId={shownRouteFullInfoId} closeModal={closeRouteFullInfoModal}/>;
    }

    return (
        <main className={styles.RouteDashboard}>
            <h1>Управление маршрутами</h1>
            {routeSpinner}
            {routeTable}
            {scheduleModal}
            {routeFullInfoModal}
        </main>
    );
};

const mapStateToProps = (state) => {
    return {
        routeList: state.routeReducer.routeList,
        routeListLoaded: state.routeReducer.routeListLoaded,
        cityList: state.cityReducer.cityList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRouteList: () => dispatch(actions.fetchRouteList()),
        showFullRouteInfo: (routeId) => dispatch(actions.setSelectedRouteById(routeId)),
        showSchedule: (routeId) => dispatch(actions.setSelectedScheduleRouteId(routeId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteDashboard);