import React from 'react';
import PropTypes from 'prop-types';
import Submit from '../../Components/Submit/Submit';
import Input from '../../Components/Input/Input';

const Login = ({ submitLogin }) => {

    return (
        <section className="login-section">
            <h1 className="login-descript__title">Login</h1>
            <form className="login-form" onSubmit={submitLogin}> 
                <Input descript="Name*" name="login" type="text" setClass="login-form__name" />
                <Input descript="Password*" name="password" type="password" setClass="login-form__pass" />
                <Submit btnText="Sign in" />
            </form>
        </section>
    )
};

Login.propTypes = {
    submitLogin: PropTypes.func
}

export default Login;