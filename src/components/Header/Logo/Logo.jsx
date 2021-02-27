import React from 'react';

import styles from './Logo.module.css';
import TransTrackerImage from "../../../assets/images/trans-tracker-logo.png";

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <img src={TransTrackerImage} alt=""/>
            <h1>SarTransTracker</h1>
        </div>
    );
};

export default Logo;