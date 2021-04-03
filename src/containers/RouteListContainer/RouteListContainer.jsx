import React from 'react';

import * as actions from './../../store/actions';
import {connect} from "react-redux";
import RouteList from "../../components/RouteList/RouteList";

import styles from './RouteListContainer.module.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import SearchInput from "../../components/UI/SearchInput/SearchInput";

class RouteListContainer extends React.Component {


    componentDidMount() {
        if (this.props.routeList.length === 0) this.props.fetchRouteList();
    }

    componentWillUnmount() {
        this.props.clearRouteListFilter();
    }

    render() {

        let spinner = null;

        if (this.props.routeList.length === 0) {
            spinner = <div><Spinner/></div>
        }


        return (
            <div className={styles.RouteListContainer}>
                <div className={styles.SearchField}>
                    <SearchInput onSearch={this.props.filterRouteListByNumberTemplate}
                                 placeholder={"Введите номер маршрута"}/>
                </div>
                {spinner}
                <RouteList
                    routeList={this.props.filteredRouteList ? this.props.filteredRouteList : this.props.routeList}
                    showSchedule={this.props.setSelectedSchedule}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        routeList: state.routeReducer.routeList,
        filteredRouteList: state.routeReducer.filteredRouteList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRouteList: () => dispatch(actions.fetchRouteList()),
        filterRouteListByNumberTemplate: (numberTemplate) => dispatch(actions.filterRouteListByNumberTemplate(numberTemplate)),
        clearRouteListFilter: () => dispatch(actions.clearRouteListFilter()),
        setSelectedSchedule: (routeId) => dispatch(actions.setSelectedScheduleRouteId(routeId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteListContainer);