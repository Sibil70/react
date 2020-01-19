import React from 'react';
import logo from './logo.png';
import './logo.scss'

const Logo = () =>  (
        <div className="logo">
            <img className="logo__image" src={logo} alt="LoftTaxi LOGO" />
        </div>
    )

export default Logo;