import React from 'react';
import PropTypes from 'prop-types';

import RouteListItem from "./RouteListItem/RouteListItem";

import styles from './RouteList.module.css';

const RouteList = (props) => {
    return (
        <ul className={styles.RouteList}>
            {props.routeList.idList.map(routeId => {
                const route = props.routeList.byId[routeId];
                return <RouteListItem number={route.number}
                                      key={route.id}
                                      startStop={route.startStop.name}
                                      lastStop={route.lastStop.name}
                                      showSchedule={() => {
                                          props.showSchedule(route.id)
                                      }}
                />
            })}
        </ul>
    );
};

RouteList.propTypes = {
    routeList: PropTypes.array.isRequired
}

export default RouteList;