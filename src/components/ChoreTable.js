// TODO: Add completedBy property to chores and action to add users

import React, { Component } from 'react';

export default function ChoreTable(props) {

  const choreList = props.chores;
  const userList = props.users;

  const rows = choreList.map((chore, i) => {
    return (
      <div
        key={i + '_' + chore.title}
        className="chore-row"
      >
        <div>
          {chore.title}
        </div>
        <div>
          <button>Complete</button>
        </div>
        {/* TODO */}
        {/*{chore.completedBy}*/}
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
