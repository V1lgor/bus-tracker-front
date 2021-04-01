import React from 'react';
import Map from "../../components/Map/Map";
import RouteListContainer from "../RouteListContainer/RouteListContainer";
import Spinner from "../../components/UI/Spinner/Spinner";

class Main extends React.Component {

    state = {
        routeListVisible: true
    }

    render() {

        let routeList = null;

        if (this.state.routeListVisible) {
            routeList = <RouteListContainer/>
        }

        return (
            <main>
                {routeList}
                <Map/>
            </main>
        );
    };
}

export default Main;