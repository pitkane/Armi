import {
  JOURNAL_REQUEST_DATA,
  JOURNAL_RECEIVE_DATA,
  JOURNAL_RECEIVE_ERROR,
  JOURNAL_CLOSE_FORM,
  JOURNAL_CHANGE_FORM } from '../constants/ActionTypes';

const defaultState = {
  data: [],
  isLoading: false,
  error: false,
  displayForm: false,
  form: ''
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case JOURNAL_REQUEST_DATA:
      return Object.assign({}, state, { isLoading: true, error: false });
    case JOURNAL_RECEIVE_DATA:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: false })
    case JOURNAL_RECEIVE_ERROR:
      return Object.assign({}, state, { isLoading: false, error: true });

    case JOURNAL_CHANGE_FORM:
      return Object.assign({}, state, { displayForm: true, form: action.data });

    case JOURNAL_CLOSE_FORM:
      return Object.assign({}, state, { displayForm: false, form: '' })

    default:
      return state
  }
}
