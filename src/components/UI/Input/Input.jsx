import React from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <input className={styles.Input} placeholder={props.placeholder} name={props.name}/>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string
}
export default Input;