import React from 'react';
import MenuItem from "./MenuItem/MenuItem";

import * as actions from './../../../store/actions';

import styles from './Menu.module.css';
import {connect} from "react-redux";

const Menu = (props) => {

    const handleRoutesItemClick = () => {
        if (props.stopListVisible) {
            props.toggleStopListVisibility();
            props.toggleRouteListVisibility();
        }
        else props.toggleRouteListVisibility();
    }

    const handleStopsItemClick = () => {
        if (props.routeListVisible) {
            props.toggleRouteListVisibility();
            props.toggleStopListVisibility();
        }
        else props.toggleStopListVisibility();
    }

    return (
        <div className={styles.Menu}>
            <MenuItem text={"Маршруты"} onClick={handleRoutesItemClick}/>
            <MenuItem text={"Остановки"} onClick={handleStopsItemClick}/>
            <MenuItem text={"Звонок диспетчеру"} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        routeListVisible: state.routeReducer.routeListVisible,
        stopListVisible: state.stopReducer.stopListVisible
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleRouteListVisibility: () => dispatch(actions.toggleRouteListVisibility()),
        toggleStopListVisibility: () => dispatch(actions.toggleStopListVisibility()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);