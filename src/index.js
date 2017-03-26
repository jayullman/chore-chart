import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';


import './style/normalize.css';
import './style/index.css';

// import reducers
import reducers from './reducers/combined-reducers.js';


// check to see if localStorage is available
// adapted from http://stackoverflow.com/questions/16427636/check-if-localstorage-is-available
function isLocalStorageAvailable() {
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

// check if localStorage has been previously used for app
// if so, load initial condition into store
let initialState = {};
if (localStorage.getItem('users')) {
  initialState = {
    chores: JSON.parse(localStorage.getItem('chores')),
    users: JSON.parse(localStorage.getItem('users')),
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
    currentView: "MAIN"
  }
}

// create Redux Store
const store = createStore(reducers, initialState);
store.subscribe(() => {
  console.log("state: ", store.getState());

  // update localStorage with new state if local storage is available
  if (isLocalStorageAvailable() === true) {
    let currentState = store.getState();
  
    for (let item in currentState) {
      if (currentState.hasOwnProperty(item)) {
        localStorage.setItem(item, JSON.stringify(currentState[item]));
      }
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
