import {
  FORMS_CHANGE_FORM,
  FORMS_CLOSE_FORM } from '../constants/ActionTypes';

const defaultState = {
  displayForm: false,
  isLoading: false,
  form: ''
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case FORMS_CHANGE_FORM:
      return Object.assign({}, state, { displayForm: true, form: action.data });

    case FORMS_CLOSE_FORM:
      return Object.assign({}, state, { displayForm: false, form: '' })

    default:
      return state
  }
}
