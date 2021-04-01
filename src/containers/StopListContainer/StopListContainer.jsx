import React from 'react';

import * as actions from './../../store/actions';
import {connect} from "react-redux";
import RouteList from "../../components/RouteList/RouteList";

import styles from './StopListContainer.module.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import SearchInput from "../../components/UI/SearchInput/SearchInput";
import Stop from "../../components/Stop/Stop";

class StopListContainer extends React.Component {


    componentDidMount() {
        if (this.props.stopList.length === 0) this.props.fetchStopList();
    }

    componentWillUnmount() {
        this.props.clearStopListFilter();
    }

    render() {

        console.log(this.props);

        let spinner = null;

        if (this.props.stopList.length === 0) {
            spinner = <div><Spinner/></div>
        }

        let stopList = this.props.filteredStopList ? this.props.filteredStopList : this.props.stopList

        return (
            <div className={styles.StopListContainer}>
                <div className={styles.SearchField}>
                    <SearchInput onSearch={this.props.filterStopListByNameTemplate} placeholder={"Введите название остановки"}/>
                </div>
                {spinner}
                {stopList.map(stop => <Stop key={stop.id} id={stop.id} name={stop.name} onShowOnMap={() => {}}/>)}
            </div>
        );
    }
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