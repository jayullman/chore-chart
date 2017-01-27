import { combineReducers } from 'redux';
import choresReducer from './reducer-chores';
import currentUserReducer from './reducer-currentUser';
import usersReducer from './reducer-users';

export default combineReducers({
  users: usersReducer,
  chores: choresReducer,
  currentUser: currentUserReducer
});
