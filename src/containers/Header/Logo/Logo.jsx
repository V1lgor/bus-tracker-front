import React from 'react';

import styles from './Logo.module.css';
import TransTrackerImage from "../../../assets/images/trans-tracker-logo.png";

import TransTracker from '../../../assets/images/trans-tracker.png';

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <img src={TransTracker} alt=""/>
        </div>
    );
};

export default Logo;