import React from 'react';
import styles from "./Header.module.css";

import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";

const Header = (props) => {
    return (
        <div className={styles.Header}>
            <Logo/>
            <Menu/>
        </div>
    );
};

export default Header;