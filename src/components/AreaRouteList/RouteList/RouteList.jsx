import React from 'react';

import styles from './RouteList.module.css';
import {PropTypes} from "prop-types";

const RouteList = (props) => {
    return (
        <div className={styles.RouteList}>
            {props.routeList}
        </div>
    );
};

RouteList.propTypes = {
    routeList: PropTypes.array
}

export default RouteList;
