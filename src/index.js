import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';


import './style/normalize.css';
import './style/index.css';

// import reducers
import reducers from './reducers/combined-reducers.js';

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

  // update localStorage with new state
  let currentState = store.getState();

  for (let item in currentState) {
    if (currentState.hasOwnProperty(item)) {
      localStorage.setItem(item, JSON.stringify(currentState[item]));
    }
  }

})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
