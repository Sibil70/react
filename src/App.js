import React from 'react';

import './App.scss';
import Header from './Header/Header';
import Login from './Pages/Login/Login';
import Map from './Pages/Map/Map';
import Profile from './Pages/Profile/Profile';
import Registration from './Pages/Registration/Registration';

class App extends React.Component {
  pages = {
    profile: {
      title: 'Профиль',
      name: 'profile',
      component: () => <Profile />,
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
      component: () => <Login submitLogin={this.submitLogin} />
    }
  }

  state = {
    activePage: 'login'
  }

  changePage = (e) => {
    this.setState({ activePage: e.target.dataset.page })
  }

  submitLogin = () => {
    this.setState( {activePage: 'map'})
  }

  render() {
    const { activePage } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header changePage={this.changePage} activePage={activePage} pages={this.pages}/>
          {
          this.pages[activePage]
          ? this.pages[activePage].component()
          : 'Компонент не найден'
          }
        </div>
      </div>
    )
  }
}

export default App;
