import React, { Component } from 'react';

import * as helpers from '../helpers';

export default class SettingsPage extends Component {
  constructor() {
    super();

    this.state = {
      nameInput: "",
      colorSelect: "#1d9f9f",
      choreInput: ""
    };
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

  handleSubmitHousemate = (event) => {
    event.preventDefault();
    let userName = this.state.nameInput;
    let userColor = this.state.colorSelect;

    // check if user is unique
    if (helpers.findIndexOfUser(this.props.users, userName) < 0) {
      this.props.addUserActionCreator(userName, userColor);
      this.setState({nameInput: ""});
      this.props.openModal(userName + ' was added as a housemate');

    // if user already exists, do not add to store and give error modal
    } else {
      this.props.openModal(userName + ' already exists', "ERROR");
    }

  }

  handleSubmitChore = (event) => {
    event.preventDefault();
    let chore = this.state.choreInput;

    // check if chore is unique
    if (helpers.findIndexOfChore(this.props.chores, chore) < 0) {

      this.props.addChoreActionCreator(chore);
      this.setState({choreInput: ""});
      this.props.openModal(chore + ' added to chores');

      // if chore already exists, do not add to store and give error modal
    } else {
      this.props.openModal(chore + ' already exists', "ERROR");

    }

  }

  // this function will clear our localStorage
  handleDeleteData(event) {
    localStorage.clear();
  }

  render() {
    console.log(this.props);
    return (
      <div className="route settings-page">
        <fieldset>
          <legend>Add Housemate</legend>
          <form
            onSubmit={this.handleSubmitHousemate}
          >
            <label>
              Username
              <input
                value={this.state.nameInput}
                onChange={this.handleUserTextInputChange}
                type="text"
                name="name"
                placeholder="Enter Name"
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
            <button>Submit</button>
          </form>
        </fieldset>
        <fieldset>
          <legend>Add Chore</legend>
          <form
            onSubmit={this.handleSubmitChore}
          >
            <label>
              Chore
              <input
                value={this.state.choreInput}
                onChange={this.handleChoreTextInputChange}
                type="text"
                name="chore"
                placeholder="Enter Chore"
              />
            </label>
            <button>Submit</button>
          </form>
        </fieldset>
        <fieldset>
          <legend>Delete User Data</legend>
          <form
            onSubmit={this.handleDeleteData}
          >
            <button>Delete Data</button>
          </form>
        </fieldset>
      </div>
    );
  }
}
