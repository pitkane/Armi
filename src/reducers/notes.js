import {
  NOTES_REQUEST_DATA,
  NOTES_RECEIVE_DATA,
  NOTES_ERROR } from '../constants/ActionTypes';

const defaultState = {
  data: [],
  isLoading: false,
  error: false
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case NOTES_REQUEST_DATA:
      return Object.assign({}, state, { isLoading: true, error: false });
    case NOTES_RECEIVE_DATA:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: false })
    case NOTES_ERROR:
      return Object.assign({}, state, { isLoading: false, error: true });
    default:
      return state
  }
}
