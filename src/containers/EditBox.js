// this container will be responsible for editing
// usernames and chores. It is made into a container
// because it will be involved with heavily editing the store


// TODO: complete EditBox container

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  deleteChore,
  deleteUser
} from '../actions/actions';

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

  confirmEdit = () => {

  }

  deleteItem = () => {
    // find the index of the item to be deleted

    if (this.props.editItem.userName) {
    const userIndex = this.props.users.find((user, index) => {
      if (user.userName === this.props.editItem.userName) {
        return userIndex;
      }
    });

    this.props.deleteUser(userIndex);

    } else {
      const choreIndex = this.props.chores.find((chore, index) => {
        if (chore.title === this.props.editItem.title) {
          return choreIndex;
        }
      });
      console.log(this.props)
      this.props.deleteChore(choreIndex);
    }

    // closes the edit box
    this.props.onClose();
  }

  render() {
      return (
        <div className="edit-box">

          <form onSubmit={this.confirmEdit}>


            <button onClick={this.confirmEdit}>OK</button>

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
    deleteUser
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EditBox);
