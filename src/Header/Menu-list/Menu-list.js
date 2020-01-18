import React, { Component } from 'react';

const menuItems = {
    Login: "Логин",
    Map: "Карта",
    Profile: "Профиль"
};

const buttonHandler = (e)=>{
    console.log(e.target);
    console.log(e.currentTarget);    
}

const menuBtns = Object.keys(menuItems);

class MenuList extends Component {
    render() {
        return (
            <ul className="menu__list" onClick={buttonHandler}>
                {menuBtns.map(
                    menuItem =>
                        <li className='menu__item' key={menuItem}>
                            <button data-page={menuItem}> {menuItem} </button>
                        </li>
                )
                }
            </ul>
        )
    }
}

export default MenuList;