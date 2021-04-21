import React from 'react';
import {Placemark} from "react-yandex-maps";
import PropTypes from "prop-types";

const RoadNode = (props) => {
    return (
        <Placemark
            geometry={[props.xPos, props.yPos]}
            properties={{
                iconContent: props.id.toString(),
                hintContent: props.id.toString(),
                balloonContentHeader: `Узел ${props.id.toString()}`,
                balloonContent: `Координаты: ${props.xPos}, ${props.yPos}`
            }}
            modules={[
                "geoObject.addon.hint",
                'geoObject.addon.balloon',
                "layout.ImageWithContent"
            ]}
            options={{
                preset: "islands#blueCircleIcon",
                iconContentSize: [0, 10],
                iconContentOffset: [0, 0],
            }}
        />
    );
};

RoadNode.propTypes = {
    id: PropTypes.number.isRequired,
    xPos: PropTypes.number.isRequired,
    yPos: PropTypes.number.isRequired
}

export default RoadNode;