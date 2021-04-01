import React from 'react';

import * as actions from './../../store/actions';
import {connect} from "react-redux";
import StopList from "../../components/StopList/StopList";

import styles from './StopListContainer.module.css';

class StopListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchStopList();
    }

    render() {
        return (
            <div className={styles.StopListContainer}>
                <StopList stopList={this.props.stopList}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stopList: state.stopReducer.stopList
    };
};