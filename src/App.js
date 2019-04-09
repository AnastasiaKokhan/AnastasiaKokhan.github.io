import React, { Component } from 'react';
import Header from './header/Header';

import './common/base.css';
import './common/reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
