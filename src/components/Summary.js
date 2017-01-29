// this component will list all of the chores that you can do

import React from 'react';

export default function Summary(props) {

  // create array of <li>'s of chores not completed by the
  // current user
  let choresCurrentUserHasNotDone = []
  props.chores.forEach(chore => {
        if (chore.completedBy.indexOf(props.currentUser) < 0) {
          choresCurrentUserHasNotDone.push(<li key={chore.title}>{chore.title}</li>);
        }
    });


  return (
    <div>
      {props.currentUser !== "" ? <h3>Hello, {props.currentUser}!</h3> : <h3>Add some housemates in the settings</h3>}
      {choresCurrentUserHasNotDone.length === 0 && props.chores.length > 0
        ? <h4>
            Congratulations! You have completed all
            of the household chores.
          </h4>
        : null
      }
      {props.chores.length === 0
        ? <h4>Add some chores in the settings to get started</h4>
        : <div>
            <h4>It is your turn to do the following chores:</h4>
            <ul>
              {choresCurrentUserHasNotDone}
            </ul>
          </div>
      }
    </div>
  );
}
