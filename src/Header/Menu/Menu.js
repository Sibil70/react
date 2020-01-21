import React from 'react';
import MenuList from '../Menu-list/Menu-list';
import './menu.scss'

const Menu = (props) => {
    return (
        <nav className="menu">
            <MenuList {...props}/>
        </nav>
    )
};

export default Menu;