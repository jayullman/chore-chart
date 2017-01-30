// this reducer will determine which main section of the app to render

import {
  CHANGE_VIEW,
  CLEAR_USER_DATA
} from '../actions/action-types';

import * as view from '../view-types';

export default function currentViewReducer(state = view.MAIN, action) {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.payload;

    case CLEAR_USER_DATA:
      return view.MAIN;

    default:
      return state;
  }
}
