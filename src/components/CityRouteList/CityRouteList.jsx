import React from 'react';

import ExpandableList from "../UI/ExpandableList/ExpandableList";
import Route from "./Route/Route";

const CityRouteList = (props) => {
    return (
        <ExpandableList title={props.cityName}>
            {props.routeList.map(route => <Route key={route.id}
                                                 number={route.number}
                                                 startStop={route.startStop.name}
                                                 lastStop={route.lastStop.name}
                                                 onShowSchedule={() => {
                                                     props.onShowSchedule(route.id)
                                                 }}/>)}
        </ExpandableList>
    );
};

export default CityRouteList;