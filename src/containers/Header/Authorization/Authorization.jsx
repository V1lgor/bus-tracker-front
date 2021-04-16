import React from 'react';

import styles from './Authorization.module.css';

import Authpic from '../../../assets/images/authorization.png';
import Form from "../../../components/Form/Form";

const mouseOverAction = () => {
    console.log("hovered");
}

const Authorization = () => {

    let authForm = null;

    return (
        <div className={styles.Auth} onMouseOver={mouseOverAction}>
            Модернизация
            <img src={Authpic} alt=""/>
            <Form/>
        </div>
    );
};

export default Authorization;