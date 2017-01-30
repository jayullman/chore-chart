import React from 'react';

// const CONFIRM = "CONFIRM";
const ERROR = "ERROR";


export default function Modal(props) {
  const defaultColor = "rgb(204, 142, 217)";
  let modalColor;
  switch (props.type) {

    case ERROR:
      modalColor = "red";
      break;

    default:
      modalColor = defaultColor;
      break;
  }



  // if (props.isOpen === false) {
  //   return null;
  // }

  return (
      <div
        className="modal"
        style={{backgroundColor: modalColor}}

      >
        <p>{props.message}</p>
      </div>


  )
}
