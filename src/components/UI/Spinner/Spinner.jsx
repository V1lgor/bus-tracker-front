import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className='backdrop'>
            <div className='modal'>
                <div className={styles.con}>
                    <div className={styles.back}>
                        <div className={styles.circle}></div>
                    </div>
                    Идет загрузка, пожалуйста, подождите
                </div>
            </div>
        </div>
    );
};

export default Spinner;