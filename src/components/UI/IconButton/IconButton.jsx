import React from 'react';
import PropTypes from "prop-types";

import styles from './IconButton.module.css';

const IconButton = (props) => {
    return (
        <button title={props.title} className={styles.IconButton} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

IconButton.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string
}

export default IconButton;