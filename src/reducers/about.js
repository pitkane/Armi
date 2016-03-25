import { ABOUT_FETCH_POSTS } from '../constants/ActionTypes';

export default function about(state = [], action) {
  switch (action.type) {
    case ABOUT_FETCH_POSTS:
      return [...state, ...action.payload]
    default:
      return state;
  }
}
