import React, {Component} from 'react';

const menuItems = [ "Логин","Карта","Профиль","Войти"]

class MenuList extends Component {
    state = {count: 0};

    increment=(e)=>{
        console.log(e.target)
        this.setState({count: this.state.count +1})
    };

    render() {
        return (
        <ul className="menu__list">
            {menuItems.map( menuItem =>
            
            <li className="menu__item" key={menuItem} onClick={this.increment}>
                <button>{menuItem + '  ' + this.state.count}</button>
            </li>
            )
            }
        </ul>
    )}
}

export default MenuList;