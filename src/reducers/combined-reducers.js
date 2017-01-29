import { combineReducers } from 'redux';
import choresReducer from './reducer-chores';
import currentUserReducer from './reducer-currentUser';
import usersReducer from './reducer-users';
import currentViewReducer from './reducer-view';

export default combineReducers({
  users: usersReducer,
  chores: choresReducer,
  currentUser: currentUserReducer,
  currentView: currentViewReducer
});
