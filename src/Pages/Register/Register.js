import React from 'react';
import Submit from '../../Components/Submit/Submit';
import Input from '../../Components/Input/Input';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Register = ({ changePage }) => {

    let registration = (e) => {
        e.preventDefault();
        let data = {};
        [...e.target.elements].forEach(elem=>{
            if(elem.value) {
                data[elem.name] = elem.value;
            }
        })
        axios.post('https://loft-taxi.glitch.me/register', data);
    }
    
    return (
        <section className="login-section">
            <h1 className="login-descript__title">Регистрация</h1>
            <div>
                <span style={{ marginRight: 10 }}>Уже зарегистрированы?</span>
                <Link to='/login' >
                    <span onClick={changePage} data-page='login'>Войдите</span>
                </Link>
            </div>
            <br />
            <form className="login-form" onSubmit={registration}>
                <Input descript="Адрес электронной почты" name="email" type="email" setClass="login-form__email" />
                <Input descript="Имя" name="name" type="text" setClass="login-form__name" />
                <Input descript="Фамилия" name="surname" type="text" setClass="login-form__surname" />
                <Input descript="Пароль*" name="password" type="password" setClass="login-form__pass" />
                <Submit btnText="Sign in" />
            </form>
        </section>
    )
};

export default Register;