// TODO: Add completedBy property to chores and action to add users

import React, { Component } from 'react';

export default function ChoreTable(props) {

  const choreList = props.chores;
  const userList = props.users;

  const rows = choreList.map((chore, i) => {
    // create list of who completed each chore

    const completedBy = chore.completedBy.map(user => {
      return (
        <div key={user} className="token">{user}</div>
      )
    });


    return (
      <div
        key={i + '_' + chore.title}
        className="chore-row"
      >
        <div>
          {chore.title}
        </div>
        <div>
          <button
            onClick={props.handleCompleteChore}
            value={chore.title}
          >
            Complete
          </button>
        </div>
          {completedBy}
        <div>

        </div>
      </div>
    );
  });

  return (
    <div className="chore-table">

          {rows}
    </div>
  )
}
