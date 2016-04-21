import Axios from 'axios'
import Parse from 'parse'
import _ from 'lodash'

import {
  NOTES_REQUEST_DATA,
  NOTES_RECEIVE_DATA,
  NOTES_ERROR } from '../constants/ActionTypes';

function notesRequestData() {
  return {
    type: NOTES_REQUEST_DATA
  }
}

function notesReceiveData(json) {
  return {
    type: NOTES_RECEIVE_DATA,
    data: json
  }
}

function notesReceiveError(json) {
  return {
    type: NOTES_ERROR,
    data: json
  }
}


export function notes_read() {
  return function (dispatch) {
    dispatch(notesRequestData())

    const NotesObject = Parse.Object.extend('Notes')
    const query = new Parse.Query(NotesObject)

    return query.find({
      success: (results) => {
        dispatch(notesReceiveData(results))
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}

export function notesCreate(body, username = 'anynomous', critical = false) {
  return (dispatch) => {
    dispatch(notesRequestData())
    const NotesObject = Parse.Object.extend('Notes')
    const newNote = new NotesObject
    newNote.set('body', body)
    newNote.set('username', username)
    newNote.set('critical', critical)
    return newNote.save(null, {
      success: (note) => {
        // We can dispatch something here if needed
        dispatch(notes_read())
      },
      error: (note, error) => {
        console.log(note, error)
        // Or, we can dispatch something concerning about the error here
      }
    })
  }
}

export function notes_delete(notes_id) {
  return function (dispatch) {
    dispatch(notesRequestData())

    const NotesObject = Parse.Object.extend('Notes');
    const query = new Parse.Query(NotesObject);
    // debugger
    return query.get(notes_id)
      .then((note) => {
        return note.destroy({
          success: function (removed_note) {
            dispatch(notes_read());
          },
          error: function (removed_note, error) {
            console.log(removed_note, error)
          }
        })
      })

    // return setTimeout(() => {
    //   // Yay! Can invoke sync or async actions with `dispatch`
    //   dispatch(bsReceiveData([]));
    // }, 2000);
  }
}

export function notesUpdate(object, newBody = 'empty', newCritical = false) {
  return (dispatch) => {
    dispatch(notesRequestData())

    object.set('body', newBody)
    object.set('critical', newCritical)

    return object.save(null, {
      success: (post) => {
        dispatch(notes_read())
      },
      error: (item, error) => {
        console.log(item, error)
      }
    })
  }
}
