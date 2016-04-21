import {
  FORMS_CHANGE_FORM,
  FORMS_CLOSE_FORM,
  FORMS_EDIT } from '../constants/ActionTypes';

const defaultState = {
  displayForm: false,
  isLoading: false,
  editing: false,
  editObject: null,
  form: ''
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case FORMS_CHANGE_FORM:
      return Object.assign({}, state, { displayForm: true, form: action.payload });

    case FORMS_EDIT:
      return Object.assign({}, state, { displayForm: true, editing: true, editObject: action.payload.object, form: action.payload.form });

    case FORMS_CLOSE_FORM:
      return Object.assign({}, state, { displayForm: false, isLoading: false, editing: false, editObject: null, form: '' })

    default:
      return state
  }
}
