import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './menu-list.scss';

const MenuList = ({ changePage, activePage, pages }) => {
    const pageBtn = Object.keys(pages);

    return (
        <ul className="menu__list">
            {pageBtn.map(
                pageItem =>
                    <li className="menu__item" key={pageItem}>
                        <button 
                            className={classnames({ active: activePage === pageItem })}
                            onClick={changePage} 
                            data-page={pageItem}> 
                            {pages[pageItem].title} 
                        </button>
                    </li>
            )
            }
        </ul>
    )
}

MenuList.propTypes = {
    changePage: PropTypes.func.isRequired, 
    activePage: PropTypes.string.isRequired,
    pages: PropTypes.object.isRequired
}

export default MenuList;