// react & router
import React, { useState, createContext } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Header from './Header/Header';
import Login from './Pages/Login/Login';
import Map from './Pages/Map/Map';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import NotFound from './Pages/404/404';

// style
import './App.scss';

export const { Provider, Consumer } = createContext();

const App = () => {
  const [activePage, setPage] = useState('login');
  const [isLogged, setLogged] = useState(false);

  const authStatus = {
    login: (data) => {
      if (data.success === true && data.token !== '') {
        setLogged(true);
        setPage('map');
      }
    },

    logout: () => {
      setLogged(false);
      setPage('login')
    }
  };

  const changePage = (e) => {
    if (e.target.dataset.page === 'login') {
      authStatus.logout()
    }
    if (e.target.dataset.page === 'register') {
      setPage(e.target.dataset.page)
    }
    if (isLogged) {
      setPage(e.target.dataset.page)
    }
  }

  const submitLogin = (data) => {
    authStatus.login(data);
    setPage('map');
  }

  const pages = {
    profile: {
      title: 'Профиль',
      name: 'profile',
      component: () => <Profile />,
    },
    map: {
      title: 'Карта',
      name: 'map',
      component: () => <Map />,
    },
    register: {
      title: 'Регистрация',
      name: 'register',
      component: () => <Register changePage={changePage} />,
    },
    login: {
      title: 'Выйти',
      name: 'login',
      component: () => <Login submitLogin={submitLogin} changePage={changePage} />
    }
  }

  return (
    <Provider>
      <div className="App">
        <div className="container">
          {isLogged && <Header changePage={changePage} activePage={activePage} pages={pages} setPage={setPage} />}
          <Switch>
            <Route path="/" component={pages[activePage].component} exact />
            <Route path={`/${pages[activePage].name}`} component={pages[activePage].component} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Provider>
  )
}

export default App;
