import React from 'react';

export default function ChoreList(props) {

  // Receive list of chores as an array passed in as prop
  const choreList = props.chores;

  // map chores to array of <li> items
  const choreListItems = choreList.map((chore, i) => {
    return (
        <li
          key={i+ '_' + chore}
        >
          {chore}
        </li>
    )
  });

  return (
    <ul>
      {choreListItems}
    </ul>
  )

}
