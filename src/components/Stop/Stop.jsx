import React from 'react';

import styles from './Stop.module.css';
import Button from "../UI/Button/Button";
import PropTypes from "prop-types";

const Stop = (props) => {
    return (
        <div className={styles.Stop}>
            <h3>{props.name}</h3>
            <Button text={"Показать на карте"} onClick={() => props.onShowOnMap(props.id)}/>
        </div>
    );
};

Stop.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onShowOnMap: PropTypes.func.isRequired
}

export default Stop;