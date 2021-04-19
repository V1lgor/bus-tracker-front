import React, {useState, useEffect} from 'react';

import * as actions from '../../store/actions';

import styles from './RouteInfoContainer.module.css';
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

const RouteInfoContainer = (props) => {

    const {routeId, route, selectedRouteId, setSelectedRouteById} = props;

    const [loadingRoute, setLoadingRoute] = useState(true);

    useEffect(() => {
        if (selectedRouteId !== routeId) setSelectedRouteById(routeId);
    }, [routeId, route, selectedRouteId, setSelectedRouteById]);

    useEffect(() => {
        if (route) setLoadingRoute(false);
    }, [route, loadingRoute]);

    let spinner = null;
    let routeInfo = null;

    if (loadingRoute) {
        spinner = <Spinner/>
    }
    else {
        routeInfo = <React.Fragment>
            <h2>Информация о маршруте № {props.route.number}</h2>
            <p><b>Начальная остановка:</b> {props.route.startStop.name}</p>
            <p><b>Конечная остановка:</b> {props.route.lastStop.name}</p>
            <p><b>Время одного рейса:</b>{props.route.tripTime}</p>
            <p><b>Протяженность:</b> {props.route.length}</p>
            <p><b>Количество единиц транспорта на маршруте:</b> {props.route.vehicleCount}</p>
            <p><b>Компания-перевозчик:</b></p>
        </React.Fragment>
    }

    return (
        <div className={styles.RouteInfoContainer}>
            {spinner}
            {routeInfo}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        route: state.routeReducer.selectedRoute,
        selectedRouteId: state.routeReducer.selectedRouteId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedRouteById: (routeId) => dispatch(actions.setSelectedRouteById(routeId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteInfoContainer);