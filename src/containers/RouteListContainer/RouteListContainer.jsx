import React from 'react';

import * as actions from './../../store/actions';
import {connect} from "react-redux";

import styles from './RouteListContainer.module.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import SearchInput from "../../components/UI/SearchInput/SearchInput";
import AreaRouteList from "../../components/AreaRouteList/AreaRouteList";

class RouteListContainer extends React.Component {


    componentDidMount() {
        if (!this.props.routeListLoaded) this.props.fetchRouteList();
    }

    componentWillUnmount() {
        this.props.clearRouteListFilter();
    }

    render() {

        let spinner = null;

        if (!this.props.routeList) {
            spinner = <div><Spinner/></div>
        }

        let routeList = null;
        if (this.props.routeList)
            routeList = this.props.filteredRouteList ? this.props.filteredRouteList : this.props.routeList;


        return (
            <div className={styles.RouteListContainer}>
                <div className={styles.SearchField}>
                    <SearchInput onSearch={this.props.filterRouteListByNumberTemplate}
                                 placeholder={"Введите номер маршрута"}/>
                </div>
                {spinner}
                {this.props.cityList.idList.map(cityId => {
                    const cityRouteList = {};

                    for (let routeType in this.props.routeList) {
                        if (this.props.routeList.hasOwnProperty(routeType)) {

                            const currentTypeRouteList = this.props.routeList[routeType];
                            cityRouteList[routeType] = [];

                            currentTypeRouteList.idList.forEach(routeId => {
                                const route = currentTypeRouteList.byId[routeId];

                                if (route.city === cityId) cityRouteList[routeType].push(route);
                            })
                        }
                    }

                    return <AreaRouteList routeList={cityRouteList}
                                          cityName={this.props.cityList.byId[cityId].name}
                                          onShowSchedule={this.props.setSelectedSchedule}/>
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        routeList: state.routeReducer.routeList,
        routeListLoaded: state.routeReducer.routeListLoaded,
        cityList: state.cityReducer.cityList,
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