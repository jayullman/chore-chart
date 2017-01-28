import { SELECT_USER } from '../actions/action-types';


export default function currentUserReducer(state = "", action) {

  switch (action.type) {
    case SELECT_USER:
      return action.payload;

    default:
      return state;

  }
}
