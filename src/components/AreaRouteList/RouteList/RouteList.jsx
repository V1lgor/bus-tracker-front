import React from 'react';

import styles from './RouteList.module.css';
import {PropTypes} from "prop-types";
import Route from "../Route/Route";

const RouteList = (props) => {
    console.log(props);
    return (
        <div className={styles.RouteList}>
            {props.routeList.map(route => {
                return (
                    <Route key={route.id}
                           number={route.number}
                           startStop={route.startStop.name}
                           lastStop={route.lastStop.name}
                           onShowSchedule={() => {
                               props.onShowSchedule(route.id)
                           }}
                           onShowInfo={() => {
                               console.log("OK");
                               props.onShowInfo(route.id)
                           }}/>)
            })}
        </div>
    );
};

RouteList.propTypes = {
    routeList: PropTypes.array
}

export default RouteList;
