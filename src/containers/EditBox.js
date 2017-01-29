// this container will be responsible for editing
// usernames and chores. It is made into a container
// because it will be involved with heavily editing the store


// TODO: complete EditBox container

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  deleteChore,
  deleteUser,
  editUser,
  editChore,
  selectUser
} from '../actions/actions';

import * as helpers from '../helpers';


class EditBox extends Component {
  constructor(props) {
    super(props);
    console.log(deleteChore)
    if (props.editItem.userName) {
      this.state = {
        type: "user",
        nameInput: props.editItem.userName,
        colorSelect: props.editItem.color,
      }
    } else {
      this.state = {
        type: "chore",
        choreInput: props.editItem.title
      }
    }
  }

  handleUserTextInputChange = (event) => {
    let inputText = event.target.value;
    this.setState({nameInput: inputText})
  }

  handleChoreTextInputChange = (event) => {
    let inputText = event.target.value;
    this.setState({choreInput: inputText})
  }

  handleUserColorSelectChange = (event) => {
    let colorSelect = event.target.value;
    this.setState({colorSelect: colorSelect})
  }

  confirmEdit = (event) => {
    event.preventDefault();

    // for user items
    if (this.state.type === "user") {
      // edit the record if the user changed any properties
      if (this.state.nameInput !== this.props.editItem.userName
        || this.state.colorSelect !== this.props.editItem.color) {

          this.props.editUser({
            userName: this.state.nameInput,
            color: this.state.colorSelect
          }, helpers.findIndexOfUser(this.props.users, this.props.editItem.userName));
        }

      // update the currentUser if that user has been edited
      if (this.props.currentUser === this.props.editItem.userName) {
        this.props.selectUser(this.state.nameInput);
      }

    // for chore items
    } else {
      if (this.state.choreInput !== this.props.editItem.title) {
        this.props.editChore({
          title: this.state.choreInput,
          completedBy: [...this.props.editItem.completedBy]
        }, helpers.findIndexOfChore(this.props.chores, this.props.editItem.title));
      }
    }

    this.props.onClose();

  }

  deleteItem = () => {
    // if the item is a user
    if (this.state.type === "user") {
      this.props.deleteUser(helpers.findIndexOfUser(this.props.users, this.props.editItem.userName));
      this.props.openModal(this.props.editItem.userName + ' was removed from housemates');
      // update the currentUser if that user has been deleted
      if (this.props.currentUser === this.props.editItem.userName) {
        this.props.selectUser("");
      }
    // if the item is a chore
    } else {
      this.props.deleteChore(helpers.findIndexOfChore(this.props.chores, this.props.editItem.title));
      this.props.openModal(this.props.editItem.title + ' was removed from chores');
    }


    // closes the edit box
    this.props.onClose();




  }

  render() {
      return (
        <div className="edit-box">

          <form onSubmit={this.confirmEdit}>
            {this.state.type === "user"
              ? <div>
                  <label>
                    Username
                    <input
                      autoFocus
                      value={this.state.nameInput}
                      onChange={this.handleUserTextInputChange}
                      type="text"
                      name="name"
                    />
                  </label>
                  <label>
                    Token Color
                    <select
                      value={this.state.colorSelect}
                      onChange={this.handleUserColorSelectChange}
                    >
                      <option value="#1d9f9f">Blue</option>
                      <option value="#3cbf1b">Green</option>
                      <option value="#dbe931">Yellow</option>
                      <option value="#ffa800">Orange</option>
                      <option value="#af2ad2">Purple</option>
                    </select>
                  </label>
                </div>
                : <div>
                  <label>
                    Chore
                    <input
                      autoFocus
                      value={this.state.choreInput}
                      onChange={this.handleChoreTextInputChange}
                      type="text"
                      name="chore"
                    />
                  </label>
                  </div>
              }
            <button>OK</button>

          </form>
          <button onClick={this.props.onClose}>Cancel</button>
          <button onClick={this.deleteItem}>Delete</button>
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
    deleteChore,
    deleteUser,
    editUser,
    editChore,
    selectUser
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EditBox);
