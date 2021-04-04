import React from 'react';
import PropTypes from "prop-types";

import styles from './Route.module.css';
import IconButton from "../../UI/IconButton/IconButton";
import ScheduleIcon from "../../UI/icons/ScheduleIcon";
import RouteIcon from "../../UI/icons/RouteIcon";
import QuestionMarkIcon from "../../UI/icons/QuestionMarkIcon";
import EyeIcon from "../../UI/icons/EyeIcon";

const Route = (props) => {

    return (
        <div className={styles.Route}>
            <div className={styles.Description}>
                <h3>{props.number}</h3>
            </div>
            <div className={styles.Buttons}>
                <div className={styles.ShowScheduleButton}>
                    <IconButton title={"Показать расписание"}
                                onClick={props.onShowSchedule}><ScheduleIcon/></IconButton>
                </div>
                <div className={styles.ShowInfoButton}>
                    <IconButton title={"Показать информацию о маршруте"}
                                onClick={props.onShowInfo}><QuestionMarkIcon/></IconButton>
                </div>
                <div className={styles.ShowOnMapButton}>
                    <IconButton title={"Показать маршрут на карте"}><RouteIcon/></IconButton>
                </div>
                <div className={styles.ShowVehiclesOnMapButton}>
                    <IconButton
                        title={"Переключить отображение на карте транспорта по этому маршруту"}><EyeIcon/></IconButton>
                </div>
            </div>
        </div>
    )
}

Route.propTypes = {
    number: PropTypes.string.isRequired,
    startStop: PropTypes.string.isRequired,
    lastStop: PropTypes.string.isRequired,
    onShowSchedule: PropTypes.func
};

export default Route;