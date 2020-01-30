import React from 'react';
import PropTypes from 'prop-types';
import Submit from '../../Components/Submit/Submit';
import Input from '../../Components/Input/Input';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Login = ({ submitLogin, changePage }) => {
    const auth = (e) => {
        e.preventDefault();
        let data = {};
        [...e.target.elements].forEach(elem => {
            if (elem.value) {
                data[elem.name] = elem.value;
            }
        })

        axios.post('https://loft-taxi.glitch.me/auth', data)
            .then(res => {
                submitLogin(res.data)
            })
    }

    return (
        <section className="login-section">
            <h1 className="login-descript__title">Войти</h1>
            <div>
                <span style={{ marginRight: 10 }}>Новый пользователь?</span>
                <Link to='/register' >
                    <span onClick={changePage} data-page='register'>Зарегистрируйтесь</span>
                </Link>
            </div>
            <br />
            <form className="login-form" onSubmit={auth}>
                <Input descript="Name*" name="email" type="text" setClass="login-form__email" />
                <Input descript="Password*" name="password" type="password" setClass="login-form__pass" />
                <Submit btnText="Sign in" />
            </form>
        </section>
    )
};

Login.propTypes = {
    submitLogin: PropTypes.func.isRequired
}

export default Login;