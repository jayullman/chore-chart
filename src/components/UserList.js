import React from 'react';

export default function UserList(props) {

  // Receive list of chores as an array passed in as prop
  const userList = props.users;

  // map chores to array of <li> items
  const userListItems = userList.map((user, i) => {
    return (
        <li
          key={i+ '_' + user}
        >
          {user.userName}
        </li>
    )
  });

  return (
    <ul>
      {userListItems}
    </ul>
  )
}
