import React, { Component } from 'react';
import './style/App.css';


// during development, the different routes will all be
// present on the main page until routing is learned

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chore Chart</h2>
        </div>
        <div className="route index-page">
        </div>
        <div className="route chore-tracker-page">
        </div>
        <div className="route settings-page">
        </div>
      </div>
    );
  }
}

export default App;
