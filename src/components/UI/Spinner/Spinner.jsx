import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={styles.back}>
            <div className={styles.circle}></div>
        </div>

    );
};

export default Spinner;