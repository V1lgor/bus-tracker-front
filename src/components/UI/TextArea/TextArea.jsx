import React from 'react';
import styles from './TextArea.module.css';
import PropTypes from 'prop-types';


const TextArea = (props) => {
    return (
        <textarea className={styles.TextArea} placeholder={props.placeholder} name={props.name}> </textarea>
    );
};

TextArea.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string
}

export default TextArea;