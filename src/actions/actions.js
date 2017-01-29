import {
  ADD_USER,
  ADD_CHORE,
  SELECT_USER,
  COMPLETE_CHORE,
  DELETE_CHORE,
  DELETE_USER,
  EDIT_USER,
  EDIT_CHORE,
  CHANGE_VIEW,
  CLEAR_USER_DATA,
  RESET_CHORE
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

export function selectUser(userName) {
  return {
    type: SELECT_USER,
    payload: userName
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

export function resetChore(choreIndex) {
  return {
    type: RESET_CHORE,
    payload: choreIndex
  }
}

export function deleteUser(userIndex) {
  return {
    type: DELETE_USER,
    payload: userIndex
  }
}

export function editUser(userObject, userIndex) {
  return {
    type: EDIT_USER,
    payload: userObject,
    oldIndex: userIndex
  }
}

export function editChore(choreObject, choreIndex) {
  return {
    type: EDIT_CHORE,
    payload: choreObject,
    oldIndex: choreIndex
  }
}

export function changeView(newView) {
  return {
    type: CHANGE_VIEW,
    payload: newView
    }
}

export function clearUserData() {
  return {
    type: CLEAR_USER_DATA
  }
}
