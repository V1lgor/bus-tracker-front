import React, {useState} from 'react';

import styles from './CityStopList.module.css';
import PropTypes from "prop-types";
import Stop from "../Stop/Stop";
import DropdownArrow from "../UI/DropdownArrow/DropdownArrow";

const CityStopList = (props) => {
    console.log(props);
    const [isStopListVisible, setStopListVisibility] = useState(false);

    let stopList = null;

    if (isStopListVisible) {
        stopList = props.stopList.map(stop => <Stop id={stop.id} name={stop.name} onShowOnMap={() => {
        }}/>);
    }

    const toggleStopListVisibility = () => {
        setStopListVisibility(!isStopListVisible);
    }

    return (
        <div className={styles.CityStopListWrapper}>
            <div className={styles.CityStopList} onClick={toggleStopListVisibility}>
                <div className={styles.ArrowWrapper}>
                    <DropdownArrow arrowUp={isStopListVisible}/>
                </div>
                <h3 className={styles.CityName}>{props.cityName}</h3>
            </div>
            {stopList}
        </div>
    )
};

CityStopList.propTypes = {
    stopList: PropTypes.array.isRequired,
    cityName: PropTypes.string.isRequired
};

export default CityStopList;