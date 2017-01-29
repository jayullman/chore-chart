import {
  ADD_USER,
  ADD_CHORE,
  SELECT_USER,
  COMPLETE_CHORE,
  DELETE_CHORE,
  DELETE_USER
} from './action-types';

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

export function addChore(choreTitle) {
  return {
    type: ADD_CHORE,
    payload: choreTitle
  }
}

export function selectUser(user) {
  return {
    type: SELECT_USER,
    payload: user
  }
}

export function completeChore(choreTitle, currentUser) {
  return {
    type: COMPLETE_CHORE,
    payload: choreTitle,
    currentUser: currentUser
  }
}

export function deleteChore(choreIndex) {
  return {
    type: DELETE_CHORE,
    payload: choreIndex
  }
}

export function deleteUser(userIndex) {
  return {
    type: DELETE_USER,
    payload: userIndex
  }
}
