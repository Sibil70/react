import React from 'react';
import MenuList from '../Menu-list/Menu-list';
import PropTypes from 'prop-types';
import './menu.scss'



const Menu = (props) => {
    return (
        <nav className="menu">
            <MenuList {...props}/>
        </nav>
    )
};

Menu.propTypes = {
    changePage: PropTypes.func.isRequired, 
    activePage: PropTypes.string.isRequired,
    pages: PropTypes.object.isRequired
}

export default Menu;