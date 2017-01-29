import {
  ADD_CHORE,
  COMPLETE_CHORE,
  DELETE_CHORE,
  EDIT_CHORE,
  CLEAR_USER_DATA,
  RESET_CHORE
} from '../actions/action-types';


export default function choresReducer(state = [], action) {

  switch (action.type) {
    // TODO: do not add duplicate chore
    case ADD_CHORE:
      let newChore = {
        title: action.payload,
        completedBy: []
      }
      return [...state, newChore];

    case COMPLETE_CHORE:
      // do nothing if no user is selected
      if (action.currentUser === "") {
        return state;
      }
      let newChoreList = [...state];
      const choreTitle = action.payload;

      // find the chore based on the title
      let chore = newChoreList.find((chore)=>{
        return chore.title === choreTitle;
      });
      // alter the completedBy property if the user
      // is not already present
      if (chore.completedBy.indexOf(action.currentUser) < 0) {
        chore.completedBy.push(action.currentUser)
      }

      return newChoreList;

    case RESET_CHORE:
    // when all users have completed a chore, the chore can be reset
      newChoresArray = [...state];
      newChoresArray[action.payload].completedBy = [];
      return newChoresArray;

    case DELETE_CHORE:
      let newChoresArray = [...state];
       newChoresArray.splice(action.payload, 1);
       return newChoresArray;

     case EDIT_CHORE:
       newChoresArray = [...state];
       newChoresArray.splice(action.oldIndex, 1, action.payload);
       return newChoresArray;

      case CLEAR_USER_DATA:
        return [];

    default:
      return state;
  }
}
