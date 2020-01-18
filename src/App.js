import React from 'react';

import './App.scss';
import Header from './Header/Header';
import Login from './Pages/Login/Login';
import Map from './Pages/Map/Map';
import Profile from './Pages/Profile/Profile';

// const 
class App extends React.Component {

  state = {
    activePage: <>TAP ANY BUTTON!!!</>,
    pages: {
      Profile: <Profile />,
      Map: <Map />,
      Login: <Login />,
    }
  }

  changePage = (e) => {
    if (e.target.tagName === 'BUTTON') {
      this.setState({ activePage: this.state.pages[e.target.dataset.page] })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header func={this.changePage} />
          {this.state.activePage}
        </div>
      </div>
    )
  }
}

export default App;
