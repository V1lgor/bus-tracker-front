import React from 'react';

import styles from './Authorization.module.css';

import Authpic from '../../../assets/images/authorization.png';
import Form from "../../../components/Form/Form";
import Modal from "../../../components/UI/Modal/Modal";

let authForm = null;

const mouseOverAction = () => {
    console.log("hovered");
    authForm =  <Modal><Form onSubmit={onSubmit} formConfig={formConfig}/></Modal>;
}

const onSubmit = () => {}

const formConfig = {
    email: {
        elementType: 'input',
        elementLabel: 'Введите свой email',
        elementId: 'inputEmail',
        elementConfig: {
            type: 'email',
            placeholder: 'Your email'
        },
        validation: {
            required: true,
            isEmail: true
        }
    },
    password: {
        elementType: 'input',
        elementLabel: 'Введите пароль',
        elementId: 'inputPassword',
        elementConfig: {
            type: 'password',
            placeholder: 'Your Password'
        },
        validation: {
            required: true,
            minLength: 6
        }
    }
}

class Authorization extends React.Component {

    state = {
        Visible: false,
        scheduleModalVisible: false,
        routeInfoModalVisible: false
    }

    render () {
        return (
            <div className={styles.auth} onMouseOver={mouseOverAction}>
                <img src={Authpic} alt=""/>
                <p>Перейти в режим редактирования</p>
                {authForm}
            </div>
        );
    }
}

export default Authorization;