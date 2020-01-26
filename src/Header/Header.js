import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
    changePage: PropTypes.func, 
    activePage: PropTypes.string,
    pages: PropTypes.object
}

export default Header;