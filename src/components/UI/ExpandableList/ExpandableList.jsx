import React, {useState} from 'react';
import styles from "./ExpandableList.module.css";
import DropdownArrow from "./DropdownArrow/DropdownArrow";
import PropTypes from "prop-types";

const ExpandableList = (props) => {
    const [isContentVisible, setContentVisibility] = useState(props.initiallyOpen || false);

    let content = null;

    if (isContentVisible) {
        content = props.children;
    }

    const toggleContentVisibility = () => {
        setContentVisibility(!isContentVisible);
    }

    const onClick = () => {
        if (isContentVisible) {
            if (props.onClose) props.onClose();
        } else if (props.onOpen) props.onOpen();
        toggleContentVisibility();
    }

    return (
        <div className={styles.ExpandableListWrapper}>
            <div className={styles.ExpandableList} onClick={onClick}>
                <div className={styles.ArrowWrapper}>
                    <DropdownArrow arrowUp={isContentVisible}/>
                </div>
                <h3 className={styles.Title}>{props.title}</h3>
            </div>
            <div className={styles.Content}>
                {content}
            </div>
        </div>
    )
};

ExpandableList.propTypes = {
    title: PropTypes.string.isRequired,
    initiallyOpen: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool
};

export default ExpandableList;