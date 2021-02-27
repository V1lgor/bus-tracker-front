import React from 'react';

import styles from './MenuItem.module.css';

const MenuItem = (props) => {
    return (
        <div className={styles.MenuItem}>{props.text}</div>
    );
}

export default MenuItem;