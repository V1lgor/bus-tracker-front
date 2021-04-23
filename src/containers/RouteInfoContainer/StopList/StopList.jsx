import React from 'react';

import styles from './StopList.module.css';
import Stop from "./Stop/Stop";
import PropTypes from "prop-types";

const StopList = (props) => {
    return (
        <div className={styles.StopList}>
            {props.stopInfoList.map(stopInfo => <Stop name={stopInfo.stop.name}/>)}
        </div>
    );
};

StopList.propTypes = {
    stopInfoList: PropTypes.array.isRequired
};

export default StopList;