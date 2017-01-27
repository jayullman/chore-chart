import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';

import './style/index.css';

// import reducers
import reducers from './reducers/combined-reducers.js';

// create Redux Store
const store = createStore(reducers);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
