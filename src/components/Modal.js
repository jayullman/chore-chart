import React from 'react';

const CONFIRM = "CONFIRM";
const ERROR = "ERROR";


export default function Modal(props) {
  let modalColor;
  switch (props.type) {

    case CONFIRM:
      modalColor = "rgb(142, 217, 208)";
      break;

    case ERROR:
      modalColor = "red";
      console.log('error');
      break;

    default:
      modalColor = "rgb(142, 217, 208)"
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
