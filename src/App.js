// react & router
import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';

// components
import Header from './Header/Header';
import Login from './Pages/Login/Login';
import Map from './Pages/Map/Map';
import Profile from './Pages/Profile/Profile';

// style
import './App.scss';

export const { Provider, Consumer } = createContext();

const App = () => {
  const [activePage, setPage] = useState('login');
  const [isLogged, setLogged] = useState(false);

  const authStatus = {
    login: (email, password) => {
      if (email !== '' && password !== '') {
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

    if (isLogged) {
      setPage(e.target.dataset.page)
    }
  }

  const submitLogin = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    authStatus.login(formElements.login.value, formElements.password.value);
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
    login: {
      title: 'Выйти',
      name: 'login',
      component: () => <Login submitLogin={submitLogin} />
    }
  }

  return (
    <Provider>
      <div className="App">
        <div className="container">
          {isLogged && <Header changePage={changePage} activePage={activePage} pages={pages} setPage={setPage}/>}
          <Route path={`/${pages[activePage].name}`} component={pages[activePage].component}/>
        </div>
      </div>
    </Provider>
  )
}

export default App;
