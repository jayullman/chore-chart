import React from 'react';

export default function ChoreList(props) {

  // Receive list of chores as an array passed in as prop
  const choreList = props.chores;

  // map chores to array of <li> items
  const choreListItems = choreList.map((chore, i) => {
    return (
        <div
          className="list-item"
          key={i+ '_' + chore.title}
        >
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              props.selectItemToEdit(chore);
            }}>
            {chore.title}
          </a>
        </div>
    )
  });

  return (
    <div>
      <h4>Current Chores (click to edit)</h4>
      {choreListItems}
    </div>
  )

}
