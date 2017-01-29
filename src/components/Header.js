import React from 'react';
import NavBar from './NavBar';

export default function Header(props) {
  console.log(props);

  // if there are no users added, render the following <option>
  let userListItems;
  if (props.users.length === 0) {
    userListItems = <option>Add Housemate in Settings</option>;

  // otherwise, add the list of possible users to select from
  } else {
    userListItems = props.users.map(user => {
      return (
        <option key={user.userName}>{user.userName}</option>
      );
    });
  }

  return (
    <div className="App-header">
      <h2>Chore Chart</h2>
      <div className="login-box">
        <label>
          User:
          <select
            value={props.currentUser}
            onChange={props.handleUserSelect}
          >
              {userListItems}
          </select>
        </label>
      </div>
      <NavBar changeView={props.changeView}/>
    </div>
  );

}
