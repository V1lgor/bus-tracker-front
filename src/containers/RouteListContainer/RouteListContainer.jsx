import React from 'react';

import * as actions from './../../store/actions';
import {connect} from "react-redux";
import RouteList from "../../components/RouteList/RouteList";

import styles from './RouteListContainer.module.css';

class RouteListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRouteList();
    }

    render() {
        return (
            <div className={styles.RouteListContainer}>
                <RouteList routeList={this.props.routeList}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        routeList: state.routeReducer.routeList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRouteList: () => dispatch(actions.fetchRouteList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteListContainer);