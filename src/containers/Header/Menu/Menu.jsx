import React from 'react';
import MenuItem from "./MenuItem/MenuItem";

import * as actions from './../../../store/actions';

import styles from './Menu.module.css';
import {connect} from "react-redux";

const Menu = (props) => {
    return (
        <div className={styles.Menu}>
            <MenuItem text={"Маршруты"} onClick={props.toggleRouteListVisibility}/>
            <MenuItem text={"Остановки"} onClick={props.toggleStopListVisibility}/>
            <MenuItem text={"Звонок диспетчеру"} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleRouteListVisibility: () => dispatch(actions.toggleRouteListVisibility()),
        toggleStopListVisibility: () => dispatch(actions.toggleStopListVisibility()),
    };
};

export default connect(null, mapDispatchToProps)(Menu);