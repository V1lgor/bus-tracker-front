import React from 'react';
import {Placemark} from "react-yandex-maps";
import PropTypes from "prop-types";

const StopPlacemark = (props) => {
    return (
        <Placemark
            key={props.id}
            geometry={[props.xPos, props.yPos]}
            properties={{
                hintContent: `${props.name}. ID: ${props.id}`,
                balloonContentHeader: props.name,
            }}
            modules={[
                "geoObject.addon.hint",
                'geoObject.addon.balloon',
                "layout.ImageWithContent"
            ]}
            options={{
                preset: 'islands#redCircleIcon',
                iconContentSize: [0, 2],
                iconContentLayout: props.name,
                iconContentOffset: [0, 0],
            }}
        />
    );
};

StopPlacemark.propTypes = {
    id: PropTypes.number.isRequired,
    xPos: PropTypes.number.isRequired,
    yPos: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default StopPlacemark;