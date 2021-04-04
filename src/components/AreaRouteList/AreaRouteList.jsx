import React from 'react';

import ExpandableList from "../UI/ExpandableList/ExpandableList";
import Route from "./Route/Route";
import RouteType from "../../store/enums/RouteType";


const AreaRouteList = (props) => {
    const routeTypes = [];

    for (let routeType in props.routeList) {

        if (props.routeList.hasOwnProperty(routeType)) {

            let routeTypeTitle = null;

            switch (routeType) {
                case RouteType.CITY:
                    routeTypeTitle = "Городские маршруты"
                    break;
                case RouteType.COMMUTER:
                    routeTypeTitle = "Пригородные маршруты";
                    break;
                case RouteType.INTERCITY:
                    routeTypeTitle = "Междугородние маршруты";
                    break;
                default:
                    routeTypeTitle = "Другие маршруты";
                    break;
            }

            const routeList = props.routeList[routeType].map(route => {
                return (
                    <Route key={route.id}
                           number={route.number}
                           startStop={route.startStop.name}
                           lastStop={route.lastStop.name}
                           onShowSchedule={() => {
                               props.onShowSchedule(route.id)
                           }}/>)}
                );

            const expandableList = <ExpandableList title={routeTypeTitle}>{routeList}</ExpandableList>;

            routeTypes.push(expandableList);
        }
    }


    return (
        <ExpandableList title={props.cityName}>
            {routeTypes}
        </ExpandableList>
    );
};

export default AreaRouteList;