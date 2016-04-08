import Axios from 'axios'
import Parse from 'parse'
import _ from 'lodash'

import {
  FORMS_CHANGE_FORM,
  FORMS_CLOSE_FORM } from '../constants/ActionTypes';

export function changeForm(form) {
  return {
    type: FORMS_CHANGE_FORM,
    data: form
  }
}

export function closeForm() {
  return {
    type: FORMS_CLOSE_FORM
  }
}
