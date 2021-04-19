import React from 'react';
import Modal from "../../../../components/UI/Modal/Modal";
import RouteInfoContainer from "../../../RouteInfoContainer/RouteInfoContainer";
import Button from "../../../../components/UI/Button/Button";

const RouteInfoModal = (props) => {
    return (
        <Modal closeModal={props.closeModal}>
            <RouteInfoContainer routeId={props.routeId}/>
            <Button text={"Редактировать"}/>
        </Modal>
    );
};

export default RouteInfoModal;