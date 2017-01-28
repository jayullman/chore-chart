import React, { Component } from 'react';

export default function ChoreTable(props) {

  const choreList = props.chores;
  const userList = props.users;

  const rows = choreList.map((chore, i) => {
    return (
      <div key={i + '_' + chore.title}>
        <div>
          {chore.title}
        </div>
        <div>
          <button>Complete</button>
        </div>
        <div>

        </div>
      </div>
    );
  });

  return (
    <div className="chore-table">
      <div>
        <div>Chores</div>
        <div>Click to Complete</div>
        <div>Completed By</div>
          {rows}
      </div>
    </div>
  )
}
