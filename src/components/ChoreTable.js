import React from 'react';

function createToken(name, users) {
  // get user object
  let userObject = null;
  userObject = users.find((user) => {
    if (user.userName === name) {
      return true;
    }
  });

  console.log(userObject.userName);
  console.log(userObject.color);
  return (
    <div
      style={{
      color: '#fff',
      backgroundColor: userObject.color
      }}
      className="token"
    >
      {name}
    </div>
  );
}

export default function ChoreTable(props) {

  const choreList = props.chores;

  const rows = choreList.map((chore, i) => {
    // create list of who completed each chore

    const completedBy = chore.completedBy.map(user => {
      return (
        <div key={user} className="token-container">{createToken(user, props.users)}</div>
      )
    });

    return (
      <div
        key={i + '_' + chore.title}
        className="chore-row"
      >
        <div className="chore-complete-container">

          {props.users.length !== completedBy.length
            ? <button
                onClick={props.handleCompleteChore}
                value={chore.title}
              >
                Done
              </button>
            : <button
                onClick={props.handleResetChore}
                value={chore.title}
              >
                Reset
              </button>
          }
        </div>
        <div className="chore-title">
          {chore.title}
        </div>

        <div className="completed-by">

          {completedBy}

        </div>
      </div>
    );
  });

  return (
    <div className="chore-table">
      <h3>Chore Chart</h3>
      <h5>Click Done to add your token to the chore</h5>


          {rows}
    </div>
  )
}
