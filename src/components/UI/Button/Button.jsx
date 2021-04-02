import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = (props) => {
    return <button className={styles.Button} onClick={props.onClick}>{props.text}</button>
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;