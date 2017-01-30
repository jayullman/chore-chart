// Footer component for the app

import React from 'react';

function Footer() {
  return (
    <div className="App-footer">
      <div className="git-hub-project">
        View this project on&nbsp;
        <a
          target="_blank"
          href="https://github.com/libeja/chore-chart"
        >
          GitHub&nbsp;
          <i
            className="fa fa-github"
            aria-hidden="true"
          ></i>
        </a>
      </div>
      <small>Created by Jay<br/>
      Visit me on <a target="_blank"
        href="https://github.com/libeja">GitHub </a><a
          target="_blank"
          href="https://github.com/libeja"><i
            className="fa fa-github" aria-hidden="true"></i></a></small>
    </div>
  );
}

export default Footer;
