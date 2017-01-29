import React from 'react';
import * as view from '../view-types';

export default function NavBar(props) {

  return (
    <ul className="navbar">
      <a
        href="#"
        onClick={() => {props.changeView(view.MAIN)}}
      >
        <li>Summary</li>
      </a>
      <a
        href="#"
        onClick={() => {props.changeView(view.CHORE_CHART)}}
      >
      <li>Chore Chart</li>
      </a>
      <a
        href="#"
        onClick={() => {props.changeView(view.SETTINGS)}}
      >
        <li>Settings</li>
      </a>
    </ul>
  );
}
