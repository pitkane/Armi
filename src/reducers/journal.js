import {
  JOURNAL_REQUEST_DATA,
  JOURNAL_RECEIVE_DATA,
  JOURNAL_RECEIVE_ERROR } from '../constants/ActionTypes';

const defaultState = {
  data: [],
  isLoading: false,
  error: false
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case JOURNAL_REQUEST_DATA:
      return Object.assign({}, state, { isLoading: true, error: false });
    case JOURNAL_RECEIVE_DATA:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: false })
    case JOURNAL_RECEIVE_ERROR:
      return Object.assign({}, state, { isLoading: false, error: true });
    default:
      return state
  }
}
