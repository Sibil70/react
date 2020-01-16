import React from 'react';
import './menu.scss'
let handleClick = function () {
    console.log('action!');
}

const Menu = (props) => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li onClick={handleClick} className="menu__item">{props.props.login}</li>
                <li onClick={handleClick} className="menu__item">{props.props.map}</li>
                <li onClick={handleClick} className="menu__item">{props.props.profile}</li>
                <li onClick={handleClick} className="menu__item">{props.props.auth}</li>
            </ul>
        </nav>
    )
};

export default Menu;