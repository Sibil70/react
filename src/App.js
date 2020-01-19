import React from 'react';

import './App.scss';
import Header from './Header/Header';
import Login from './Pages/Login/Login';
import Map from './Pages/Map/Map';
import Profile from './Pages/Profile/Profile';
import Registration from './Pages/Registration/Registration';

const pages = {
  profile: {
    title: 'Профиль',
    name: 'profile',
    component:   () => <Profile />,
  },
  map: {
    title: 'Карта',
    name: 'map',
    component:   
    () => <Map />,
  },
  registration: {
    title: 'Регистрация',
    name: 'registration',
    component: () => <Registration />,
  },
  login: {
    title: 'Войти',
    name: 'login',
    component:   () => <Login />
  }
};
class App extends React.Component {

  state = {
    activePage: 'login'
  }

  changePage = (e) => {
    this.setState({ activePage: e.target.dataset.page })
  }

  render() {
    const { activePage } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header changePage={this.changePage} activePage={activePage} pages={pages}/>
          {pages[activePage].component()}
        </div>
      </div>
    )
  }
}

export default App;
