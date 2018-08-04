import React, { Component } from 'react';
import Home from './components/Home';

import './assets/css/layout.css';
import './assets/css/themes/blue.css';
import './assets/css/media.css';

class App extends Component {
  render() {
    return (
          <div id="root">
            <div className="main">
              <Home />
            <div className="bg"></div>
            </div>
          </div>
    );
  }
}
export default App;