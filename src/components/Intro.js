import React from 'react';

export default function Intro() {

  return (
    <div className="intro">
      <h2>Welcome to the Chore Tracker</h2>
      <h3>A simple app for housemates</h3>
      <p>
        The concept is simple: Each housemate can do a chore whenever they like.
        Once a housemate completes a chore, they do not have to do that chore
        again until all other housemates have completed that same chore.
      </p>
      <p>
        This app allows you to add housemates and chores in the settings screen.
        You then 'log in' by selecting your username in the drop-down menu in the top
        right corner of the app. The summary page tells you which chores you
        haven't done this cycle. The Chore Chart section is a visual representation of
        who did which chores by placing tokens next to a particular chore. Once every
        housemate has placed their token, the chore can be reset. The order in
        which each housemate completes the chore is not important. The system
        only enforces that each housemate does each chore once per cycle. Names
        and chores can be edited in the settings screen by clicking on the
        housemate name or chore title. The Summary section tells you which chores
        you have yet to complete for the current cycle.
      </p>
    </div>
  );
}
