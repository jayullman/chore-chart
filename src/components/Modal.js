import React from 'react';

const CONFIRM = "CONFIRM";
const ERROR = "ERROR";


export default function Modal(props) {
  let modalColor;
  switch (props.type) {

    case CONFIRM:
      modalColor = "green";
      break;

    case ERROR:
      modalColor = "red";
      console.log('error');
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
        <h4>{props.message}</h4>
      </div>


  )
}
