import React from 'react';

import styles from './DropdownArrow.module.css';
import PropTypes from "prop-types";

const DropdownArrow = (props) => {
    return (
        <div className={props.arrowUp ? styles.ArrowUp : styles.ArrowDown}/>
    );
};

DropdownArrow.propTypes = {
    arrowUp: PropTypes.bool
};

export default DropdownArrow;