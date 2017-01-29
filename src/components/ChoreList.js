import React from 'react';

export default function ChoreList(props) {

  // Receive list of chores as an array passed in as prop
  const choreList = props.chores;

  // map chores to array of <li> items
  const choreListItems = choreList.map((chore, i) => {
    return (
        <div
          key={i+ '_' + chore.title}
        >
          {chore.title}
          <button
            onClick={()=>{
              props.selectItemToEdit(chore);
            }}
          >
            edit
          </button>
        </div>
    )
  });

  return (
    <div>
      {choreListItems}
    </div>
  )

}
