import React from 'react';
import Map from "../../components/Map/Map";
import RouteListContainer from "../RouteListContainer/RouteListContainer";
import {connect} from "react-redux";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import StopListContainer from "../StopListContainer/StopListContainer";

class Main extends React.Component {

    state = {
        sidebarVisible: false
    }

    render() {
        let sidebarContent = null;

        if (this.props.routeListVisible) {
            sidebarContent = <Sidebar><RouteListContainer/></Sidebar>
        }
        if (this.props.stopListVisible) {
            sidebarContent = <Sidebar><StopListContainer/></Sidebar>
        }

        return (
            <main>
                {sidebarContent}
                <Map/>
            </main>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        routeListVisible: state.routeReducer.routeListVisible,
        stopListVisible: state.stopReducer.stopListVisible
    };
};


export default connect(mapStateToProps, null)(Main);