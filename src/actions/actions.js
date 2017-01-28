import { ADD_USER, ADD_CHORE } from './action-types';

// this action will add the new user to the users array in the store
export function addUser(userName, color) {
  return {
    type: ADD_USER,
    payload: {
      userName,
      color
    }
  }
}

export function addChore(chore) {
  return {
    type: ADD_CHORE,
    payload: chore
  }
}
