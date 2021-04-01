import React from 'react';

import styles from './MenuItem.module.css';
import PropTypes from "prop-types";

const MenuItem = (props) => {
    return (
        <div className={styles.MenuItem} onClick={props.onClick}>{props.text}</div>
    );
};

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default MenuItem;