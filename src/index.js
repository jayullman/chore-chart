import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

import './style/normalize.css';
import './style/index.css';

// import reducers
import reducers from './reducers/combined-reducers.js';


// create Redux Store
const store = createStore(reducers);
store.subscribe(() => {
  console.log("state: ", store.getState());
})
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
