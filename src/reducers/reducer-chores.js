import { ADD_CHORE } from '../actions/action-types';


export default function choresReducer(state = [], action) {

  switch (action.type) {
    case ADD_CHORE:
      return [...state, action.payload]

    default:
      return state;
  }
}
