import React from 'react';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu'
import './header.scss'

const Header = (props) => {
    return (
        <div className="header">
            <Logo />
            <Menu  {...props}/>
        </div>
    )
};

export default Header;