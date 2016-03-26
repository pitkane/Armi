import {
  POSTS_REQUEST_DATA,
  POSTS_RECEIVE_DATA,
  POSTS_RECEIVE_ERROR } from '../constants/ActionTypes';

const defaultState = {
  isLoading: false,
  posts_data: [],
  bs_data: [],
  error: false
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case POSTS_REQUEST_DATA:
      return Object.assign({}, state, { isLoading: true, error: false });
    case POSTS_RECEIVE_DATA:
      return Object.assign({}, state, { isLoading: false, posts_data: action.data, error: false })
    case POSTS_RECEIVE_ERROR:
      return Object.assign({}, state, { isLoading: false, error: true });
    default:
      return state
  }
}
