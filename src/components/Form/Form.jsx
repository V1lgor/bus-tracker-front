import React from 'react';
import styles from './Form.module.css';
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import {checkLogPass} from "../../store/actions/authorization";
import Button from "../UI/Button/Button";
import PropTypes from "prop-types";

const formConfigTest = {
    name: {
        elementType: 'input',
        elementLabel: 'Введите свое имя',
        elementId: 'inputName',
        elementConfig: {
            type: 'text',
            placeholder: 'Your name'
        },
        validation: {
            required: true,
            minLength: 5
        }
    },
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
    street: {
        elementType: 'input',
        elementLabel: 'Введите улицу',
        elementId: 'inputStreet',
        elementConfig: {
            type: 'text',
            placeholder: 'Your street'
        },
        validation: {
            required: true
        }
    },
    zipCode: {
        elementType: 'input',
        elementLabel: 'Введите почтовый индекс',
        elementId: 'inputZipCode',
        elementConfig: {
            type: 'text',
            placeholder: 'ZIP Code'
        },
        validation: {
            required: true,
            minLength: 6,
            maxLength: 6
        }
    },
    country: {
        elementType: 'select',
        elementLabel: 'Укажите свою страну',
        elementId: 'selectCountry',
        elementConfig: {
            options: [
                {value: 'ru', displayValue: 'Russian Federation'},
                {value: 'usa', displayValue: 'United States of America'},
                {value: 'de', displayValue: 'Germany'},
            ]
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

const onSubmit1 = () => {
    let formResult = {
        email: document.getElementById("inputEmail").value,
        password: document.getElementById("inputPassword").value
    }
}

const Form = (props) => {
    //const password = React.createRef();

    let onSubmit = props.onSubmit;
    let formConfig = props.formConfig;
    let elementsToRender = [];
    let i = 0;

    for (let elem in formConfig) {
        let block = null;
        switch(formConfig[elem].elementType) {
            case 'input':
                block =
                    <div className={styles.formElement}>
                        <label htmlFor={formConfig[elem].elementId}>
                            {formConfig[elem].elementLabel}
                        </label>
                        <input key={i}
                               id={formConfig[elem].elementId}
                               type={formConfig[elem].elementConfig.type}
                               placeholder={formConfig[elem].elementConfig.placeholder}
                               minLength={formConfig[elem].validation.minLength}
                               maxLength={formConfig[elem].validation.maxLength}
                        />
                    </div>
                break;
            case 'select':
                let options = formConfig[elem].elementConfig.options;
                block =
                    <div className={styles.formElement}>
                        <label htmlFor={formConfig[elem].elementId}>
                            {formConfig[elem].elementLabel}
                        </label>
                        <select id={formConfig[elem].elementId}>
                            {options.map((option) => (
                                <option key={i} value={option.value}>{option.displayValue}</option>
                            ))}
                        </select>
                    </div>
                break;
        }
        elementsToRender.push(block);
        i++;
    }

    return (
        <div>
            <form action={onSubmit} className={styles.formStyle}>
                {elementsToRender}
                <Button text={'Подтвердить'} onClick={onSubmit}/>
            </form>
        </div>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formConfig: PropTypes.object.isRequired
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