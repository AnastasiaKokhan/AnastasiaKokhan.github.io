import React, { Component } from 'react';
import Header from './header/Header';

import './common/base.css';
import './common/reset.css';
import Main from './main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
