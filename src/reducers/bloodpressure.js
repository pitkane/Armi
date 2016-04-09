import {
  BP_REQUEST_DATA,
  BP_RECEIVE_DATA,
  BP_ERROR } from '../constants/ActionTypes';

const defaultState = {
  data: [],
  isLoading: false,
  error: false
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case BP_REQUEST_DATA:
      return Object.assign({}, state, { isLoading: true, error: false });
    case BP_RECEIVE_DATA:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: false })
    case BP_ERROR:
      return Object.assign({}, state, { isLoading: false, error: true });
    default:
      return state
  }
}
