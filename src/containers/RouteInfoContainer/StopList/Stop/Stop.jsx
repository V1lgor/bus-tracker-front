import React from 'react';

import styles from './Stop.module.css';
import PropTypes from "prop-types";

const Stop = (props) => {
    return (
        <div className={styles.Stop}>
            {props.name}
        </div>
    );
};

Stop.propTypes = {
    name: PropTypes.string.isRequired
};

export default Stop;