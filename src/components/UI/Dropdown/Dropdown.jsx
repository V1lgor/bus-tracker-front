import React from 'react';
import styles from './Dropdown.module.css';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
    return (
        <select className={styles.Dropdown} onChange={props.onChange}>
            {props.optionList.map((option) => (
                       <option key={option.value} value={option.value}>{option.name}</option>
                     ))}
        </select>
    );
};

Dropdown.propTypes = {
    optionList: PropTypes.array.isRequired,
    onChange: PropTypes.func
}

export default Dropdown;