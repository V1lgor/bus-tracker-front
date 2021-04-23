import React from 'react';

import styles from './RouteList.module.css';
import {PropTypes} from "prop-types";
import Route from "../Route/Route";

const RouteList = (props) => {
    return (
        <div className={styles.RouteList}>
            {props.routeList.map(route => {
                return (
                    <Route key={route.id}
                           number={route.number}
                           onRouteSelect={() => {
                               props.onRouteSelect(route.id)
                           }}/>)
            })}
        </div>
    );
};

RouteList.propTypes = {
    routeList: PropTypes.array
}

export default RouteList;
