import React from 'react';

import styles from './RouteRow.module.css';
import PropTypes from "prop-types";
import Button from "../../../../UI/Button/Button";

const RouteRow = (props) => {

    const vehicleType = "Автобус";

    const routeType = "Городской";

    return (
        <tr className={styles.RouteRow}>
            <td>{props.id}</td>
            <td>{props.number}</td>
            <td>{props.startStop} — {props.lastStop}</td>
            <td>{vehicleType}</td>
            <td>{routeType}</td>
            <td>{props.cityName}</td>
            <td><Button text={"Показать полную информацию"} onClick={() => {props.onShowFullInfo(props.id)}}/></td>
            <td><Button text={"Показать расписание"} onClick={() => {props.onShowSchedule(props.id)}}/></td>
        </tr>
    );
};

RouteRow.propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.string.isRequired,
    vehicleType: PropTypes.string.isRequired,
    startStop: PropTypes.string.isRequired,
    lastStop: PropTypes.string.isRequired,
    routeType: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired,
    onShowFullInfo: PropTypes.func.isRequired,
    onShowSchedule: PropTypes.func.isRequired
};

export default RouteRow;