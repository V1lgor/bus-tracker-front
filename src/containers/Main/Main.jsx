import React from 'react';
import RouteListContainer from "../RouteListContainer/RouteListContainer";
import {connect} from "react-redux";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import StopListContainer from "../StopListContainer/StopListContainer";
import Modal from "../../components/UI/Modal/Modal";
import ScheduleContainer from "../ScheduleContainer";

import * as actions from '../../store/actions/';

import styles from './Main.module.css';
import RouteInfoContainer from "../RouteInfoContainer/RouteInfoContainer";
import MapContainer from "./MapContainer/MapContainer";

class Main extends React.Component {


    state = {
        sidebarVisible: false,
        scheduleModalVisible: false
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
        console.log(this.props);
        let sidebarContent = null;

        if (this.props.routeListVisible) {
            if (this.props.isRouteSelected) {
                sidebarContent = <Sidebar><RouteInfoContainer routeId={this.props.selectedRouteId}/></Sidebar>
            }
            else sidebarContent = <Sidebar><RouteListContainer/></Sidebar>
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

        if (this.props.isRouteSelected && !this.state.routeInfoModalVisible) {
            this.setState({routeInfoModalVisible: true});
        }


        let cssClassList = [styles.Main];

        return (
            <main className={cssClassList.join(' ')}>
                {sidebarContent}
                {scheduleModal}
                <div className={styles.Map}>
                    <MapContainer/>
                </div>
            </main>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        routeListVisible: state.routeReducer.routeListVisible,
        stopListVisible: state.stopReducer.stopListVisible,
        selectedRouteId: state.routeReducer.selectedRouteId,
        isRouteSelected: !!state.routeReducer.selectedRoute,
        selectedScheduleRouteId: state.scheduleReducer.selectedScheduleRouteId
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