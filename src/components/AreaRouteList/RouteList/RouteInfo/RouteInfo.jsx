import React from 'react';

import styles from './RouteInfo.module.css';
import PropTypes from "prop-types";
import Button from "../../../UI/Button/Button";
import Checkbox from "../../../UI/Checkbox/Checkbox";

const RouteInfo = (props) => {
    return (
        <div className={styles.RouteInfo}>
            <h2>Маршрут {props.name}</h2>
            <h2>{props.startStop} — {props.lastStop}</h2>
            <Button text={"Показать расписание"} onClick={props.onShowSchedule}/>
            <Checkbox label={"Показывать на карте"}
                      name={"showRouteOnMap"}
                      onChange={props.onRouteMapVisibilityChange}/>
        </div>
    );
};

RouteInfo.propTypes = {
    name: PropTypes.string.isRequired,
    startStop: PropTypes.string.isRequired,
    lastStop: PropTypes.string.isRequired,
    onShowSchedule: PropTypes.func,
    onRouteMapVisibilityChange: PropTypes.func
}


export default RouteInfo;