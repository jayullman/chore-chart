import React from 'react';

export default function UserList(props) {

  // Receive list of chores as an array passed in as prop
  const userList = props.users;

  // map chores to array of <li> items
  const userListItems = userList.map((user, i) => {
    return (
        <div
          key={i+ '_' + user}
        >
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              props.selectItemToEdit(user);
            }}>
            {user.userName}
          </a>

        </div>
    )
  });

  return (
    <div>
      <h4>Current Housemates (click to edit)</h4>
      {userListItems}
    </div>
  )
}
