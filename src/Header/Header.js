import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu'
import './header.scss'

const Header = (props) => {
    return (
        <div className="header">
            <Logo />
            <Menu  {...props} />
        </div>
    )
};

Header.propTypes = {
    changePage: PropTypes.func.isRequired,
    activePage: PropTypes.string.isRequired,
    pages: PropTypes.object.isRequired
}

export default Header;