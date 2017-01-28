import { ADD_CHORE, COMPLETE_CHORE } from '../actions/action-types';


export default function choresReducer(state = [], action) {

  switch (action.type) {
    case ADD_CHORE:
      let newChore = {
        title: action.payload,
        completedBy: []
      }
      return [...state, newChore];

    case COMPLETE_CHORE:
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
      console.log(chore);
      console.log(action.currentUser);
      return newChoreList;

    default:
      return state;
  }
}
