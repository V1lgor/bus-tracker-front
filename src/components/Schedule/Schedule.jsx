import React from 'react';

import PropTypes from 'prop-types';

const Schedule = (props) => {
    // Максимальное количество рейсов одного графика на маршруте
    let tripCount = 0;
    let maxTripForwardVehicleScheduleIndex = 0;

    // false по умолчанию, если первый рейс идет с начальной остановки
    let isFirstTripReversed = false;

    // Идем по расписанию каждого графика
    props.schedule.forEach((vehicleSchedule, index) => {
        // Количество рейсов данного графика
        const vehicleTripCount = vehicleSchedule.schedule.length;
        // Ищем максимум
        if (vehicleTripCount > tripCount) {
            tripCount = vehicleTripCount;
            if (!vehicleSchedule.schedule[0].directionReverse) {
                maxTripForwardVehicleScheduleIndex = index;
            }
        }
        // Если первый рейс графика начинается с конечной, ставим флаг в true
        if (vehicleSchedule.schedule[0].directionReverse)
            isFirstTripReversed = true;
    });

    if (
        props.schedule[maxTripForwardVehicleScheduleIndex].schedule.length ===
        tripCount
    )
        tripCount++;

    // Список ячеек заголовка таблицы
    const headerCellList = [<th>Номер графика</th>];
    let currentLetter = 'А';
    let nextLetter = 'Б';

    if (isFirstTripReversed)
        [currentLetter, nextLetter] = [nextLetter, currentLetter];
    for (let i = 0; i < tripCount; i++) {
        headerCellList.push(<th key={i}>{currentLetter}</th>);
        [currentLetter, nextLetter] = [nextLetter, currentLetter];
    }

    return (
        <div>
            <h2>
                Расписание маршрута {props.routeNumber} ({props.startStop.name} —{' '}
                {props.lastStop.name})
            </h2>
            <p>А — {props.startStop.name}</p>
            <p>Б — {props.lastStop.name}</p>
            <div className='schedule-wrapper'>
                <table className='schedule'>
                    <tbody>
                    <tr className='vehicle-schedule'>{headerCellList}</tr>
                    {props.schedule.map((vehicleSchedule) => {
                        const scheduleRow = [<td>{vehicleSchedule.number}</td>];
                        const isScheduleShifted = isFirstTripReversed
                            ? !vehicleSchedule.schedule[0].directionReverse
                            : false;
                        if (isScheduleShifted) {
                            scheduleRow.push(<td></td>);
                        }
                        vehicleSchedule.schedule.forEach((trip) => {
                            scheduleRow.push(<td>{trip.startTime.slice(0, 5)}</td>);
                        });

                        const remainingCellsCount = tripCount - scheduleRow.length + 1;

                        for (let i = 0; i < remainingCellsCount; i++) {
                            scheduleRow.push(<td></td>);
                        }

                        return <tr>{scheduleRow}</tr>;
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Schedule.propTypes = {
    schedule: PropTypes.array.isRequired,
};

export default Schedule;
