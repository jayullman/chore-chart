import React, { Component } from 'react';
import './style/App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addUser } from './actions/actions'


import SettingsPage from './containers/Settings-Page'


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
        <SettingsPage
            addUserActionCreator={this.props.addUser}
        />
      </div>
    );
  }
}

function mapStateToProps() {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addUser: addUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
