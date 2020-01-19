import React from 'react';

const MenuList = ({ changePage, activePage, pages }) => {
    const page = pages;
    const pageBtn = Object.keys(page);

    return (
        <ul className="menu__list">
            {pageBtn.map(
                pageItem =>
                    <li className={`${activePage === pageItem ? 'active' : null} menu__item`} key={pageItem}>
                        <button onClick={changePage} data-page={pageItem}> {page[pageItem].title} </button>
                    </li>
            )
            }
        </ul>
    )
}

export default MenuList;