import React from 'react';
import styles from './Form.module.css';
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import {checkLogPass} from "../../store/actions/authorization";
import Modal from "../UI/Modal/Modal";

const Form = (props) => {
    const login = React.createRef();
    const password = React.createRef();

    let success = null;

    const submitFunc = () => {
        //var isValid = checkLogPass(login, password);
        var isValid = true;
        if (isValid) {
            console.log(login, " ", password);
            success = <Modal>asdaw</Modal>
        }
        else {

        }
    }

    return (
        <div>
            <form action={props.submitFunc}>
            <div> Логин <input ref={login} type="text" name="login"/> </div>
            <div> Пароль <input ref={password} type="password" name="password"/> </div>
            <input type="submit"/>
            </form>
            {success}
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkLogPass: (login, password) => dispatch(actions.checkLogPass(login, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);