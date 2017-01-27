import { ADD_USER } from '../actions/action-types';

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]

    default:
      return state;
  }
}
