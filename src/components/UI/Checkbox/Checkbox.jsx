import React from 'react';

import styles from './Checkbox.module.css';
import PropTypes from "prop-types";

const Checkbox = (props) => {
    return (
        <div className={styles.Checkbox}>
            <label htmlFor={props.name}>{props.label}</label>
            <input name={props.name} id={props.name } type="checkbox"
                   onChange={props.onChange} checked={props.checked}/>
        </div>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool
};

export default Checkbox;