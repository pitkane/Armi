import {
  BS_REQUEST_DATA,
  BS_RECEIVE_DATA,
  BS_ERROR } from '../constants/ActionTypes';

const defaultState = {
  data: [],
  isLoading: false,
  error: false
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case BS_REQUEST_DATA:
      return Object.assign({}, state, { isLoading: true, error: false });
    case BS_RECEIVE_DATA:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: false })
    case BS_ERROR:
      return Object.assign({}, state, { isLoading: false, error: true });
    default:
      return state
  }
}
