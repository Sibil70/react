import React from 'react';

const buttonHandler = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
}


const MenuList = (props) => {

    const item = props.menuItems;
    const menuBtns = Object.keys(item);

    return (
        <ul className="menu__list" onClick={buttonHandler}>
            {menuBtns.map(
                    menuItem =>
                        <li className='menu__item' key={menuItem}>
                            <button data-page={menuItem}> {item[menuItem]} </button>
                        </li>
                )
                }
        </ul>
    )
}

export default MenuList;