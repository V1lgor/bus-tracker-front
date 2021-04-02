import React from 'react';
import Map from "../../components/Map/Map";
import RouteListContainer from "../RouteListContainer/RouteListContainer";
import {connect} from "react-redux";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import StopListContainer from "../StopListContainer/StopListContainer";
import Modal from "../../components/UI/Modal/Modal";
import ScheduleContainer from "../ScheduleContainer";

import styles from './Main.module.css';

class Main extends React.Component {

    state = {
        sidebarVisible: false,
        scheduleModalVisible: false
    }

    render() {
        let sidebarContent = null;

        if (this.props.routeListVisible) {
            sidebarContent = <Sidebar><RouteListContainer/></Sidebar>
        }
        else if (this.props.stopListVisible) {
            sidebarContent = <Sidebar><StopListContainer/></Sidebar>
        }

        let scheduleModal = null;

        if (this.props.selectedSchedule) {
            this.setState({scheduleModalVisible: true});
            scheduleModal = <Modal><ScheduleContainer selectedSchedule={this.props.selectedSchedule}/></Modal>
        }

        let cssClassList = [styles.Main];

        if (this.props.routeListVisible || this.props.stopListVisible) {
            cssClassList.push(styles.WithSidebar)
        }

        return (
            <main className={cssClassList.join(' ')}>
                {sidebarContent}
                {scheduleModal}
                <Map/>
            </main>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        routeListVisible: state.routeReducer.routeListVisible,
        stopListVisible: state.stopReducer.stopListVisible,
        selectedSchedule: state.scheduleReducer.selectedSchedule
    };
};


export default connect(mapStateToProps, null)(Main);