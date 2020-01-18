import React from 'react';

import './App.css';
import Header from './Header/Header';
import Login from './Pages/Login/Login';
import Map from './Pages/Map/Map';
import Profile from './Pages/Profile/Profile';

const pages = {
  Profile: <Profile/>,
  Map: <Map/>,
  Login: <Login/>,
};
class App extends React.Component {

  state = {
    currentPage: '',
  }

  changePage = (e) => {
    if (e.target.tagName === 'BUTTON') {
      let pageFromBtn = e.target.dataset.page;
      this.setState({ currentPage: pages[pageFromBtn]})
    }

  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header func={this.changePage} />
          {this.state.currentPage}
        </div>
      </div>
    )
  }
}

export default App;
