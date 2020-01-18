import React from 'react';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu'
import './header.css'

const Header = (props) => {
    return (
        <div className="header" onClick={props.func}>
            <Logo />
            <Menu />
        </div>
    )
};

export default Header;