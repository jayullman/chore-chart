import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../style/App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  addUser,
  addChore,
  selectUser,
  completeChore,
  changeView,
  clearUserData
} from '../actions/actions';


import SettingsPage from '../components/Settings-Page';
import ChoreList from '../components/ChoreList';
import UserList from '../components/UserList';
import ChoreTable from '../components/ChoreTable';
import Summary from '../components/Summary';
import Modal from '../components/Modal';
import EditBox from './EditBox';
import Header from '../components/Header';



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
      modalType: "",
      isEditOpen: false
    }
  }

// TODO: Add edit dialogue box to change/delete usernames and chores

  // handles when the active user is selected from the
  // drop down menu
  handleUserSelect = (event) => {
    const selectedUser = event.target.value;
    this.props.selectUser(selectedUser);
  }

  // handles when user clicks complete task on the ChoreTable
  handleCompleteChore = (event) => {
    const choreTitle = event.target.value;
    this.props.completeChore(choreTitle, this.props.currentUser);
  }

  openModal = (message, type) => {

    // ensure that new modal waits for current one to finish
    if (this.state.isModalOpen) {
      this.setState({isModalOpen: false});
      setTimeout(() => {
        this.openModal(message, type);
      }, 800)
    } else {
      this.setState({
        modalMessage: message,
        isModalOpen: true,
        modalType: type === undefined ? "" : type
      });
      setTimeout(() => {
        this.closeModal();
      }, 1200)
    }

  }

  closeModal = () => {
    this.setState({ isModalOpen: false});
  }

  openEdit = () => {
    this.setState({isEditOpen: true});
  }

  closeEdit = () => {
    this.setState({ isEditOpen: false});
  }

  selectItemToEdit = (item) => {
    this.setState({editItem: item});
    this.openEdit();
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
    console.log(this.props.changeView);
    return (


        <div className="App">
          <p>{this.props.currentView}</p>

        {this.state.isEditOpen
          ? <div
              onClick={this.closeEdit}
              className="backdrop"
            />
          : null}

        <ReactCSSTransitionGroup
          transitionName="edit-box-transition"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {this.state.isEditOpen
            ? <EditBox
                openModal={this.openModal}
                onClose={() => {this.closeEdit()}}
                editItem={this.state.editItem}
              />
            : null}

        </ReactCSSTransitionGroup>


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

        <Header
          currentUser={this.props.currentUser}
          handleUserSelect={this.handleUserSelect}
          userList={userListItems}
          changeView={this.props.changeView}
        />

        <div className="route summary-page">
        </div>
        <Summary
          chores={this.props.chores}
          users={this.props.users}
          currentUser={this.props.currentUser}
        />
        <div className="route chore-tracker-page">
        </div>
        <SettingsPage
            addUserActionCreator={this.props.addUser}
            addChoreActionCreator={this.props.addChore}
            openModal={this.openModal}
            users={this.props.users}
            chores={this.props.chores}
            clearUserData={this.props.clearUserData}
        />

        <h3>Current Chores</h3>
        <ChoreList
          selectItemToEdit={this.selectItemToEdit}
          chores={this.props.chores}
        />
        <UserList
          selectItemToEdit={this.selectItemToEdit}
          users={this.props.users}
        />
        <ChoreTable
          chores={this.props.chores}
          users={this.props.users}
          handleCompleteChore={this.handleCompleteChore}
        />

        <div>
          {this.props.children}
        </div>

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    chores: state.chores,
    users: state.users,
    currentUser: state.currentUser,
    currentView: state.currentView
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addUser: addUser,
    addChore: addChore,
    selectUser: selectUser,
    completeChore: completeChore,
    changeView: changeView,
    clearUserData: clearUserData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
