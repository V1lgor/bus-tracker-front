import React, {useState} from 'react';

import PropTypes from "prop-types";
import Stop from "./Stop/Stop";
import ExpandableList from "../UI/ExpandableList/ExpandableList";

const CityStopList = (props) => {
    return (
        <ExpandableList title={props.cityName}>
            {props.stopList.map(stop => <Stop key={stop.id} id={stop.id} name={stop.name} onShowOnMap={() => {}}/>)}
        </ExpandableList>
    );
};

CityStopList.propTypes = {
    stopList: PropTypes.array.isRequired,
    cityName: PropTypes.string.isRequired
};

export default CityStopList;