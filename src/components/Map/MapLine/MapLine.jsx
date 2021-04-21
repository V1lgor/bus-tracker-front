import React from 'react';

import {PropTypes} from 'prop-types';
import {GeoObject} from "react-yandex-maps";

const MapLine = (props) => {

    const color = props.color || "#3498db";
    const strokeWidth = props.color || 4;

    return (
        <GeoObject
            key={props.id}
            geometry={{
                type: 'LineString',
                coordinates: [
                    [props.startX, props.startY],
                    [props.finishX, props.finishY],
                ],
            }}
            properties={{
                hintContent: props.hintContent,
            }}
            options={{
                geodesic: true,
                strokeWidth: strokeWidth,
                strokeColor: color,
            }}
        />
    );
};

MapLine.propTypes = {
    id: PropTypes.number.isRequired,
    startX: PropTypes.number.isRequired,
    startY: PropTypes.number.isRequired,
    finishX: PropTypes.number.isRequired,
    finishY: PropTypes.number.isRequired,
    color: PropTypes.string,
    strokeWidth: PropTypes.number,
    hintContent: PropTypes.string
}

export default MapLine;