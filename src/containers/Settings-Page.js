import React, { Component } from 'react';

export default class SettingsPage extends Component {
  constructor() {
    super();

    this.state = {
      nameInput: "",
      colorSelect: ""
    };
  }

  handleUserTextInputChange = (event) => {
    let inputText = event.target.value;
    this.setState({nameInput: inputText})
  }

  handleUserColorSelectChange = (event) => {
    let colorSelect = event.target.value;
    this.setState({colorSelect: colorSelect})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let userName = this.state.nameInput;
    let userColor = this.state.colorSelect;
    this.props.addUserActionCreator(userName, userColor);
  }

  render() {
    return (
      <div className="route settings-page">
        <form
          onSubmit={this.handleSubmit}
        >
          <label>
            Username
            <input
              value={this.state.nameInput}
              onChange={this.handleUserTextInputChange}
              type="text"
              name="name"
              placeholder="Enter Name" />
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
      </div>
    );
  }
}
