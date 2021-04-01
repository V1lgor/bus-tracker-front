import React from 'react';
import PropTypes from "prop-types";

import styles from './SearchInput.module.css';


const SearchInput = (props) => {
    const delay = props.delay ? props.delay : 1000;

    let timeout = null;

    const inputRef = React.createRef();

    const handleKeyUp = (event) => {
        // If Enter key pressed, clear callback timeout and call it immediately
        if (event.keyCode === 13) {
            clearTimeout(timeout);
            props.onSearch(inputRef.current.value);
        }
        else {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => props.onSearch(inputRef.current.value), delay);
        }
    }

    return (
        <div className={styles.SearchInput}>
            <input ref={inputRef} type="text" placeholder={props.placeholder} onKeyUp={handleKeyUp}/>
        </div>
    );
};

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    delay: PropTypes.number
};

export default SearchInput;