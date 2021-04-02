import React, {useEffect, useState} from 'react';

import * as actions from './../../store/actions';
import {connect} from "react-redux";
import RouteList from "../../components/RouteList/RouteList";

import styles from './StopListContainer.module.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import SearchInput from "../../components/UI/SearchInput/SearchInput";
import Stop from "../../components/Stop/Stop";

import CityStopList from "../../components/CityStopList/CityStopList";

const StopListContainer = (props) => {

    useEffect(() => {
        if (props.stopList.idList.length === 0) props.fetchStopList();

        return () => {
            props.clearStopListFilter();
        }
    }, []);

    let spinner = null;

    if (props.stopList.idList.length === 0) {
        spinner = <div><Spinner/></div>
    }

    console.log(props);

    let stopList = props.filteredStopList ? props.filteredStopList : props.stopList

    return (
        <div className={styles.StopListContainer}>
            <div className={styles.SearchField}>
                <SearchInput onSearch={props.filterStopListByNameTemplate}
                             placeholder={"Введите название остановки"}/>
            </div>
            {spinner}
            {props.stopList.cityList.idList.map(cityId => {
                const cityStopList = [];
                props.stopList.idList.forEach(stopId => {
                    if (props.stopList.byId[stopId].city === cityId) {
                        cityStopList.push(props.stopList.byId[stopId]);
                    }
                })
                return <CityStopList stopList={cityStopList} cityName={props.stopList.cityList.byId[cityId].name}/>
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        stopList: state.stopReducer.stopList,
        filteredStopList: state.stopReducer.filteredStopList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStopList: () => dispatch(actions.fetchStopList()),
        filterStopListByNameTemplate: (nameTemplate) => dispatch(actions.filterStopListByNameTemplate(nameTemplate)),
        clearStopListFilter: () => dispatch(actions.clearStopListFilter())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(StopListContainer);