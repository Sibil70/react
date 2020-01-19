import React from 'react';
import MenuList from '../Menu-list/Menu-list';
import './menu.scss'
const menuItems = {
    Login: "Логин",
    Map: "Карта",
    Profile: "Профиль"
};
const Menu = () => {
    return (
        <nav className="menu">
            <MenuList menuItems={menuItems}/>
        </nav>
    )
};

export default Menu;