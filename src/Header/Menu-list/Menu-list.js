import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to={`/${pageItem}`}>
                            <button 
                                className={classnames({ active: activePage === pageItem })}
                                data-page={pageItem}
                                onClick={changePage}
                                > 
                                {pages[pageItem].title} 
                            </button>
                        </Link>
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