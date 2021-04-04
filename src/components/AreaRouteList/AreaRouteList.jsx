import React from 'react';

import ExpandableList from "../UI/ExpandableList/ExpandableList";
import Route from "./Route/Route";
import RouteType from "../../store/enums/RouteType";
import RouteList from "./RouteList/RouteList";


const AreaRouteList = (props) => {
    const routeTypes = [];

    for (let routeType in props.routeList) {

        if (props.routeList.hasOwnProperty(routeType)) {

            let routeTypeTitle = null;

            let shouldContinue = null;

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
                    shouldContinue = true;
                    break;
            }

            if (shouldContinue) continue;

            const routeList = props.routeList[routeType].map(route => {
                    return (
                        <Route key={route.id}
                               number={route.number}
                               startStop={route.startStop.name}
                               lastStop={route.lastStop.name}
                               onShowSchedule={() => {
                                   props.onShowSchedule(route.id)
                               }}
                               onShowInfo={() => {
                                   console.log("OK");
                                   props.onShowInfo(route.id)
                               }}/>)
                }
            );

            const expandableList = <ExpandableList title={routeTypeTitle}><RouteList
                routeList={routeList}/></ExpandableList>;

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