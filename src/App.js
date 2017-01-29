import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
import Modal from './components/Modal';

// during development, the different routes will all be
// present on the main page until routing is learned

// Created modal window with help from tutorial at:
// https://peteris.rocks/blog/modal-window-in-react-from-scratch/
class App extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      modalMessage: "Greetings!",
      modalType: ""
    }
  }


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

  openModal = (message) => {
    console.log(message);
    this.setState({
      modalMessage: message,
      isModalOpen: true
    });
    setTimeout(() => {
      this.closeModal();
    }, 2500)
  }

  closeModal = () => {
    this.setState({ isModalOpen: false});
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

    return (
      <div className="App">
        {/* temp button to test modal */}

        <button onClick={() => {this.openModal()}}>Open Modal</button>

        {this.state.isModalOpen
          ? <div
              onClick={this.closeModal}
              className="backdrop"
            />
          : null}

        <ReactCSSTransitionGroup
          transitionName="modal-transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.isModalOpen
            ? <Modal
                onClose={() => {this.closeModal()}}
                message={this.state.modalMessage}
                type={this.state.modalType}
              />
            : null}

        </ReactCSSTransitionGroup>

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
            openModal={this.openModal}
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
