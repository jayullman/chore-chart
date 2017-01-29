import React from 'react';
import NavBar from './NavBar';

export default function Header(props) {
  console.log(props);

  return (
    <div className="App-header">
      <h2>Chore Chart</h2>
      <label>
        user:
        <select
          value={props.currentUser}
          onChange={props.handleUserSelect}
        >
            {props.userList}
        </select>
      </label>
      <NavBar changeView={props.changeView}/>
    </div>
  );

}
