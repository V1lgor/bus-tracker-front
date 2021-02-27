import React from 'react';

import styles from './Map.module.css';

import DummyMap from '../../assets/images/dummy_map.png';

const Map = () => {
    return (
        <div className={styles.Map}>
            <img src={DummyMap} alt=""/>
        </div>
    )
}

export default Map;