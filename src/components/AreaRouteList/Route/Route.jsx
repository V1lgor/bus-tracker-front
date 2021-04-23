import React from 'react';
import PropTypes from "prop-types";

import styles from './Route.module.css';

const Route = (props) => {
    console.log(props);
    return (
        <div className={styles.Route}>
            <div className={styles.Description} onClick={props.onRouteSelect}>
                <p>{props.number}</p>
            </div>
        </div>
    )
}

Route.propTypes = {
    number: PropTypes.string.isRequired,
    onRouteSelect: PropTypes.func
};

export default Route;