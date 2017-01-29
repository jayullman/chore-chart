import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER
} from '../actions/action-types';

export default function usersReducer(state = [], action) {
  let newUsersArray = [];

  switch (action.type) {
    case ADD_USER:
    // TODO: do not add duplicate user
      return [...state, action.payload]

    case DELETE_USER:
      newUsersArray = [...state];
      newUsersArray.splice(action.payload, 1);
      return newUsersArray;

    case EDIT_USER:
      newUsersArray = [...state];
      newUsersArray.splice(action.oldIndex, 1, action.payload);
      return newUsersArray;

    default:
      return state;
  }
}
