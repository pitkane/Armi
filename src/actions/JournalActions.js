import Axios from 'axios'
import Parse from 'parse'
import _ from 'lodash'

import {
  JOURNAL_REQUEST_DATA,
  JOURNAL_RECEIVE_DATA,
  JOURNAL_RECEIVE_ERROR,
  JOURNAL_CHANGE_FORM,
  JOURNAL_CLOSE_FORM,
 } from '../constants/ActionTypes';

function journalRequestData() {
  return {
    type: JOURNAL_REQUEST_DATA
  }
}

function journalDataReceived(json) {
  return {
    type: JOURNAL_RECEIVE_DATA,
    data: json
  }
}

function journalReceiveError(json) {
  return {
    type: JOURNAL_RECEIVE_ERROR,
    data: json
  }
}

export function journal_read() {
  return function (dispatch) {
    dispatch(journalRequestData())

    const JournalObject = Parse.Object.extend('Journal')
    const query = new Parse.Query(JournalObject)

    return query.descending('creationDate').find({
      success: (results) => {
        // fix data result type
        dispatch(journalDataReceived(results));
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}

export function journal_create(body, username = 'Nimetön', importance = 0) {
  return (dispatch) => {
    dispatch(journalRequestData())
    const JournalObject = Parse.Object.extend('Journal')
    const newPost = new JournalObject
    newPost.set('body', body)
    newPost.set('creationDate', new Date())
    newPost.set('importance', _.toNumber(importance))
    newPost.set('username', username)
    return newPost.save(null, {
      success: (post) => {
        // We can dispatch something here if needed
        dispatch(journal_read())
      },
      error: (post, error) => {
        console.log(post, error)
        // Or, we can dispatch something concerning about the error here
      }
    })
  }
}

export function journalUpdate(object, newBody, newUsername, newImportance) {
  return (dispatch) => {
    dispatch(journalRequestData())

    object.set('body', newBody)
    object.set('username', newUsername)
    object.set('importance', _.toNumber(newImportance))

    return object.save(null, {
      success: (post) => {
        dispatch(journal_read())
      },
      error: (item, error) => {
        console.log(item, error)
      }
    })
  }
}

// NOTES:
// Parse.Promise then( resolvedCallback, rejectedCallback )
// Adds callbacks to be called when this promise is fulfilled.
// Returns a new Promise that will be fulfilled when the callback is complete.
// It allows chaining. If the callback itself returns a Promise,
// then the one returned by "then" will not be fulfilled until
//  that one returned by the callback is fulfilled.

export function journal_delete(post_id) {
  // console.log(post_id)
  return (dispatch) => {
    const JournalObject = Parse.Object.extend('Journal');
    const query = new Parse.Query(JournalObject);
    // debugger
    return query.get(post_id)
      .then((post) => {
        return post.destroy({
          success: function (removed_post) {
            // console.log('Post tuhottu')
            dispatch(journal_read())
          },
          error: function (removed_post, error) {
            console.log(removed_post, error)
          }
        })
      })
  }
}

export function journalEditItem(item_id) {

}


// this.props.actions.posts_update(post_id, )
// this.props.actions.posts_remove(post_id)
