import React from 'react';
import Logo from './logo/logo';
import './header.css'
import Menu from './menu/menu'


const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Menu />
        </div>
    )
};

export default Header;