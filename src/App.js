import React, { Component } from 'react';
import './style/App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addUser, addChore } from './actions/actions';


import SettingsPage from './containers/Settings-Page';
import ChoreList from './components/ChoreList';
import UserList from './components/UserList';


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
            addChoreActionCreator={this.props.addChore}
        />
        <h3>Current Chores</h3>
        <ChoreList
          chores={this.props.chores}
        />
        <UserList
          users={this.props.users}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chores: state.chores,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addUser: addUser,
    addChore: addChore
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
