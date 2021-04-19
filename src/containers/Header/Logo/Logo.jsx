import React from 'react';

import styles from './Logo.module.css';

import TransTracker from '../../../assets/images/trans-tracker.png';

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <img src={TransTracker} alt=""/>
        </div>
    );
};

export default Logo;