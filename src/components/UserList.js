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
          {user.userName}
          <button
            onClick={()=>{
              console.log(user)
            }}
          >
            edit
          </button>
        </div>
    )
  });

  return (
    <div>
      {userListItems}
    </div>
  )
}
