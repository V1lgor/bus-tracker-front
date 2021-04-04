import React from 'react';

import * as actions from './../../store/actions';
import {connect} from "react-redux";

import styles from './RouteListContainer.module.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import SearchInput from "../../components/UI/SearchInput/SearchInput";
import CityRouteList from "../../components/CityRouteList/CityRouteList";

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
                    const cityRouteList = [];
                    routeList.idList.forEach(routeId => {
                        if (routeList.byId[routeId].city === cityId) {
                            cityRouteList.push(routeList.byId[routeId]);
                        }
                    })
                    return <CityRouteList routeList={cityRouteList}
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