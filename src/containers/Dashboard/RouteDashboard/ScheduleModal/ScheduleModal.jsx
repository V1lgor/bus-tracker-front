import React from 'react';
import Modal from "../../../../components/UI/Modal/Modal";
import ScheduleContainer from "../../../ScheduleContainer";

const ScheduleModal = (props) => {
    return (
        <Modal closeModal={props.closeModal}>
            <ScheduleContainer routeId={props.routeId}/>
        </Modal>
    );
};

export default ScheduleModal;