import React from 'react';

const CONFIRM = "CONFIRM";
const ERROR = "ERROR";


export default function Modal(props) {
  let modalColor;
  switch (props.modalType) {

    case CONFIRM:
      modalColor = "green";
      break;

    case ERROR:
      modalColor = "red";
      break;

    default:
      modalColor = "green"
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
        <h1>Modal Title</h1>
        <p>{props.message}</p>
        <button
          onClick={props.onClose}
        >
          Close
        </button>
      </div>


  )
}
