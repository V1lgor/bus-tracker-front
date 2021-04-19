import React from 'react';

import styles from './RouteTable.module.css';
import PropTypes from "prop-types";
import RouteRow from "./RouteRow/RouteRow";

const RouteTable = (props) => {

    console.log(props);

    return (
        <table className={styles.RouteTable}>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Номер</th>
                <th>Начальная и конечная остановки</th>
                <th>Тип транспорта</th>
                <th>Тип маршрута</th>
                <th>Город</th>
            </tr>

            {props.routeList.map(route => <RouteRow id={route.id}
                                                    number={route.number}
                                                    vehicleType={route.vehicleType}
                                                    startStop={route.startStop.name}
                                                    lastStop={route.lastStop.name}
                                                    routeType={route.type}
                                                    cityName={route.city.name}
                                                    onShowFullInfo={props.onShowFullRouteInfo}
                                                    onShowSchedule={props.onShowSchedule}/>)
            }
            </tbody>
        </table>
    );
};

RouteTable.propTypes = {
    routeList: PropTypes.array.isRequired,
    onShowFullRouteInfo: PropTypes.func.isRequired,
    onShowSchedule: PropTypes.func.isRequired
};

export default RouteTable;