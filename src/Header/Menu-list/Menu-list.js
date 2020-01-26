import React from 'react';
import PropTypes from 'prop-types';
import './menu-list.scss';

const MenuList = ({ changePage, activePage, pages }) => {
    const pageBtn = Object.keys(pages);

    return (
        <ul className="menu__list">
            {pageBtn.map(
                pageItem =>
                    <li className="menu__item" key={pageItem}>
                        <button 
                            className={`${activePage === pageItem ? 'active' : null}`} 
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
    changePage: PropTypes.func, 
    activePage: PropTypes.string,
    pages: PropTypes.object
}

export default MenuList;