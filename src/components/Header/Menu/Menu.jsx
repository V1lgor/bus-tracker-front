import React from 'react';
import MenuItem from "./MenuItem/MenuItem";

import styles from './Menu.module.css';

const Menu = (props) => {
    return (
        <div className={styles.Menu}>
            <MenuItem text={"Маршруты"} />
            <MenuItem text={"Остановки"} />
            <MenuItem text={"Звонок диспетчеру"} />
        </div>
    );
};

export default Menu;