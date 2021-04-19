import React from 'react';
import Maps from "../../components/Map/Map";
import RouteListContainer from "../RouteListContainer/RouteListContainer";
import {connect} from "react-redux";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import StopListContainer from "../StopListContainer/StopListContainer";
import Modal from "../../components/UI/Modal/Modal";
import ScheduleContainer from "../ScheduleContainer";

import * as actions from '../../store/actions/';

import styles from './Main.module.css';
import RouteInfoContainer from "../RouteInfoContainer/RouteInfoContainer";
import Form from "../../components/Form/Form";

class Main extends React.Component {

    state = {
        sidebarVisible: false,
        scheduleModalVisible: false,
        routeInfoModalVisible: false
    }

    closeScheduleModal = () => {
        this.props.clearSchedule();
        this.setState({scheduleModalVisible: false});
    }

    closeRouteInfoModal = () => {
        this.props.clearSelectedRoute();
        this.setState({routeInfoModalVisible: false});
    }

    componentWillUnmount() {
        this.props.clearRouteList();
    }

    render() {

        let sidebarContent = null;

        if (this.props.routeListVisible) {
            sidebarContent = <Sidebar><RouteListContainer/></Sidebar>
        } else if (this.props.stopListVisible) {
            sidebarContent = <Sidebar><StopListContainer/></Sidebar>
        }

        let scheduleModal = null;

        if (this.props.selectedScheduleRouteId && !this.state.scheduleModalVisible) {
            this.setState({scheduleModalVisible: true});
        }

        if (this.state.scheduleModalVisible) {
            scheduleModal =
                <Modal closeModal={this.closeScheduleModal}>
                    <ScheduleContainer routeId={this.props.selectedScheduleRouteId}/>
                </Modal>
        }

        let routeInfoModal = null;

        if (this.props.isRouteSelected && !this.state.routeInfoModalVisible) {
            this.setState({routeInfoModalVisible: true});
        }

        if (this.state.routeInfoModalVisible) {
            routeInfoModal =
                <Modal closeModal={this.closeRouteInfoModal}>
                    <RouteInfoContainer/>
                </Modal>
        }

        let cssClassList = [styles.Main];

        return (
            <main className={cssClassList.join(' ')}>
                {sidebarContent}
                {scheduleModal}
                {routeInfoModal}
                <div className={styles.Map}>
                    <Maps/>
                </div>
            </main>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        routeListVisible: state.routeReducer.routeListVisible,
        stopListVisible: state.stopReducer.stopListVisible,
        selectedScheduleRouteId: state.scheduleReducer.selectedScheduleRouteId,
        isRouteSelected: !!state.routeReducer.selectedRoute
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearSchedule: () => dispatch(actions.clearSchedule()),
        clearSelectedRoute: () => dispatch(actions.clearSelectedRoute()),
        clearRouteList: () => dispatch(actions.clearRouteList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);