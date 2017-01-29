// this component will list all of the chores that you can do

import React from 'react';

export default function Summary(props) {

  //create array of users not the currentUser
  const otherUsers = props.users.filter(user => {
    if (user.userName !== props.currentUser) {
      return true;
    } else {
      return false;
    }
  });
  // create array of <li>'s of chores not completed by the
  // current user
  let choresCurrentUserHasNotDone = [];
  let choresCurrentUserHasDone = [];
  props.chores.forEach(chore => {
        if (chore.completedBy.indexOf(props.currentUser) < 0) {
          choresCurrentUserHasNotDone.push(<li key={chore.title}>{chore.title}</li>);
        } else {
          choresCurrentUserHasDone.push(<li key={chore.title}>{chore.title}</li>);
        }
    });




  return (
    <div>
      {props.currentUser !== ""
        ? <h3>Hello, {props.currentUser}!</h3>
        : <h4>Add some housemates in the settings</h4>}
      {choresCurrentUserHasNotDone.length === 0 && props.chores.length > 0
        ? <h4>
            Congratulations! You have completed your share
            of the household chores.
          </h4>
        : null
      }
      {props.chores.length > 0 && choresCurrentUserHasNotDone.length > 0
        ? <div>
            <h4>It is your turn to do the following chores:</h4>
            <ul>
              {choresCurrentUserHasNotDone}
            </ul>
          </div>
        : null
      }
      {props.chores.length === 0
        ? <h4>Add some chores in the settings</h4>
        : null
      }
    </div>
  );
}
