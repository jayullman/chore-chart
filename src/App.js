import React, { Component } from 'react';
import './style/App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  addUser,
  addChore,
  selectUser,
  completeChore
 } from './actions/actions';


import SettingsPage from './components/Settings-Page';
import ChoreList from './components/ChoreList';
import UserList from './components/UserList';
import ChoreTable from './components/ChoreTable';


// during development, the different routes will all be
// present on the main page until routing is learned

class App extends Component {


  // handles when the active user is selected from the
  // drop down menu
  handleUserSelect = (event) => {
    const selectedUser = event.target.value;
    this.props.selectUser(selectedUser);
  }

  // handles when user clicks complete task on the ChoreTable
  handleCompleteChore = (event) => {
    const choreTitle = event.target.value;
    console.log(this.props.currentUser);
    this.props.completeChore(choreTitle, this.props.currentUser);
  }

  render() {
    // if there are no users added, render the following <option>
    let userListItems;
    if (this.props.users.length === 0) {
      userListItems = <option>Add Housemate in Settings</option>;

    // otherwise, add the list of possible users to select from
    } else {
      userListItems = this.props.users.map(user => {
        return (
          <option key={user.userName}>{user.userName}</option>
        );
      });
    }
console.log(this.props.currentUser);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chore Chart</h2>
          <select
            value={this.props.currentUser}
            onChange={this.handleUserSelect}
          >
              {userListItems}
          </select>
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
        <ChoreTable
          chores={this.props.chores}
          users={this.props.users}
          handleCompleteChore={this.handleCompleteChore}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chores: state.chores,
    users: state.users,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addUser: addUser,
    addChore: addChore,
    selectUser: selectUser,
    completeChore: completeChore
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
