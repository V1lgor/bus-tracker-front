import React from 'react';
import PropTypes from 'prop-types';

import RouteListItem from "./RouteListItem/RouteListItem";

import styles from './RouteList.module.css';

const RouteList = (props) => {
    return (
        <ul className={styles.RouteList}>
            {props.routeList.map(route =>
                <RouteListItem number={route.number}
                               startStop={route.startStop.name}
                               lastStop={route.lastStop.name}/>)}
        </ul>
    );
};

RouteList.propTypes = {
    routeList: PropTypes.array.isRequired
}

export default RouteList;