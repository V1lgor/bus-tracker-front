import React, {useState, useEffect} from 'react';
import RoadNodeMap from "../../../components/Dashboard/RoadNodeMap/RoadNodeMap";
import axios from "axios";

import * as actions from '../../../store/actions';
import {connect} from "react-redux";
import RoadControlPanel from "./RoadControlPanel/RoadControlPanel";


const RouteNodeDashboard = (props) => {

    const [showNodes, setShowNodes] = useState(true);
    const [showLines, setShowLines] = useState(true);
    const [showStops, setShowStops] = useState(true);

    const toggleNodesVisibility = () => {
        setShowNodes(!showNodes);
    }

    const toggleLinesVisibility = () => {
        setShowLines(!showLines);
    }

    const toggleStopsVisibility = () => {
        setShowStops(!showStops);
    }

    useEffect(() => {
        props.fetchRoadGraph();
        props.fetchStopList();
    }, []);


    return (
        <div>
            <RoadControlPanel showLines={showLines}
                              showNodes={showNodes}
                              showStops={showStops}
                              onShowNodesChanged={toggleNodesVisibility}
                              onShowLinesChanged={toggleLinesVisibility}
                              onShowStopsChanged={toggleStopsVisibility}/>
            <RoadNodeMap roadGraph={props.roadGraph}
                         stopList={props.stopList}
                         showNodes={showNodes}
                         showLines={showLines}
                         showStops={showStops}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        roadGraph: state.roadReducer.fullRoadGraph,
        stopList: state.stopReducer.stopList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRoadGraph: () => dispatch(actions.fetchRoadGraph()),
        fetchStopList: () => dispatch(actions.fetchStopList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteNodeDashboard);