import React, {useState, useEffect} from 'react';

import * as actions from '../../store/actions';

import styles from './RouteInfoContainer.module.css';
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

const RouteInfoContainer = (props) => {

    const {routeId, route, setSelectedRouteById} = props;

    const [loadingRoute, setLoadingRoute] = useState(true);

    console.log(loadingRoute);

    useEffect(() => {
        if (!route) setSelectedRouteById(routeId)
        else setLoadingRoute(false);
    }, [routeId, route, setSelectedRouteById]);

    let spinner = null;

    if (loadingRoute) {
        spinner = <Spinner/>
    }

    console.log(spinner);

    return (
        <div className={styles.RouteInfoContainer}>
            {spinner}
            <h2>Информация о маршруте № {props.route.number}</h2>
            <p><b>Начальная остановка:</b> {props.route.startStop.name}</p>
            <p><b>Конечная остановка:</b> {props.route.lastStop.name}</p>
            <p><b>Время одного рейса:</b>{props.route.tripTime}</p>
            <p><b>Протяженность:</b> {props.route.length}</p>
            <p><b>Количество единиц транспорта на маршруте:</b> {props.route.vehicleCount}</p>
            <p><b>Компания-перевозчик:</b></p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        route: state.routeReducer.selectedRoute
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedRouteById: (routeId) => dispatch(actions.setSelectedRouteById(routeId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteInfoContainer);