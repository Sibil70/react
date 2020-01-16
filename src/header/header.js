import React from 'react';
import Logo from './logo/logo';
import './header.css'
import Menu from './menu/menu'

const menuItems = {
    login: "Логин",
    map: "Карта",
    profile: "Профиль",
    auth: "Войти",
}
const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Menu props={menuItems} />
        </div>
    )
};

export default Header;