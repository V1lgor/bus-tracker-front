import React, {useEffect} from 'react';

import * as actions from './../../store/actions';
import {connect} from "react-redux";

import styles from './StopListContainer.module.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import SearchInput from "../../components/UI/SearchInput/SearchInput";

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

    const stopList = props.filteredStopList ? props.filteredStopList : props.stopList;

    return (
        <div className={styles.StopListContainer}>
            <div className={styles.SearchField}>
                <SearchInput onSearch={props.filterStopListByNameTemplate}
                             placeholder={"Введите название остановки"}/>
            </div>
            {spinner}
            {props.cityList.idList.map(cityId => {
                const cityStopList = [];
                stopList.idList.forEach(stopId => {
                    if (stopList.byId[stopId].city === cityId) {
                        cityStopList.push(stopList.byId[stopId]);
                    }
                })
                return <CityStopList stopList={cityStopList} cityName={props.cityList.byId[cityId].name}/>
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        stopList: state.stopReducer.stopList,
        cityList: state.cityReducer.cityList,
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