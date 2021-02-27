import React from 'react';
import PropTypes from 'prop-types';

import styles from './RouteListItem.module.css';
import Button from "../../UI/Button/Button";


const RouteListItem = (props) => {
    return (
        <li className={styles.RouteListItem}>
            <h3>{props.number}</h3>
            <p>{props.startStop} — {props.lastStop}</p>
            <Button text={"Показать расписание"} onClick={props.showSchedule}/>
        </li>
    );
};

RouteListItem.propTypes = {
    number: PropTypes.string.isRequired,
    startStop: PropTypes.string.isRequired,
    lastStop: PropTypes.string.isRequired,
    showSchedule: PropTypes.func
};

export default RouteListItem;
