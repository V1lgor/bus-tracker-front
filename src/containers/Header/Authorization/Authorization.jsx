import React from 'react';

import styles from './Authorization.module.css';

import Authpic from '../../../assets/images/authorization.png';
import Form from "../../../components/Form/Form";
import Modal from "../../../components/UI/Modal/Modal";

const onSubmit = () => {
    let formResult = {
        email: document.getElementById("inputEmail").value,
        password: document.getElementById("inputPassword").value
    }
    console.log(formResult);
}

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

let authForm = null;

class Authorization extends React.Component {
    state = {
        Visible: true // Из-за того, что state меняется с опозданием на один такт,
        // пусть он первоначально будет как бы показываться
    }

    updateState = () => {
        authForm = null;
        this.reverseState();
    }

    reverseState = () => {
        this.setState({Visible: !this.state.Visible});
    }

    onClickEvent = () => {
        this.reverseState();
        if (this.state.Visible) {
            authForm =
                <Modal closeModal={this.updateState}>
                    <Form onSubmit={onSubmit} formConfig={formConfig}/>
                </Modal>;
        }
    }

    render () {
        return (
            <div className={styles.auth} onClick={this.onClickEvent}>
                <img src={Authpic} alt=""/>
                <p>Режим редактирования</p>
                {authForm}
            </div>
        );
    }
}

export default Authorization;