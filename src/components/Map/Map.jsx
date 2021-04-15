import React from 'react';

import styles from './Map.module.css';
import {YMaps, Map, Placemark} from "react-yandex-maps";
import DummyMap from '../../assets/images/dummy_map.png';

const MapC = () => {
    return (
        <div className={styles.Map}>
            <div className={styles.MapContent}>
                <YMaps>
                    <div>
                        <Map defaultState={{
                            center: [51.533103, 46.034158],
                            zoom: 12
                        }} className={styles.Maps}>
                        </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    )
}

export default MapC;