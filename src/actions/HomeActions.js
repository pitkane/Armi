import Axios from 'axios'
import Parse from 'parse'
import _ from 'lodash'

import {
  POSTS_REQUEST_DATA,
  POSTS_RECEIVE_DATA,
  POSTS_RECEIVE_ERROR } from '../constants/ActionTypes';

function postsRequestData() {
  return {
    type: POSTS_REQUEST_DATA
  }
}

function postsDataReceived(json) {
  return {
    type: POSTS_RECEIVE_DATA,
    data: json
  }
}

function postsReceiveError(json) {
  return {
    type: POSTS_RECEIVE_ERROR,
    data: json
  }
}

export function posts_get() {
  return function (dispatch) {
    dispatch(postsRequestData())

    const PostObject = Parse.Object.extend('PostObject')
    const query = new Parse.Query(PostObject)

    return query.find({
      success: (results) => {
        // fix data result type
        dispatch(postsDataReceived(results));
      },
      error: (error) => { }
    })
  }
}

export function posts_add(body, username = 'Nimetön', importance = 0) {
  return (dispatch) => {
    const PostObject = Parse.Object.extend('PostObject')
    const newPost = new PostObject
    newPost.set('body', body)
    newPost.set('importance', _.toInteger(importance))
    newPost.set('username', username)
    return newPost.save(null, {
      success: (post) => {
        // We can dispatch something here if needed
      },
      error: (post, error) => {
        // Or, we can dispatch something concerning about the error here
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

export function posts_remove(post_id) {
  // console.log(post_id)
  return (dispatch) => {
    const postObject = Parse.Object.extend('PostObject');
    const query = new Parse.Query(postObject);
    // debugger
    return query.get(post_id)
      .then((post) => {
        return post.destroy({
          success: function (removed_post) {
            // console.log('Post tuhottu')
          },
          error: function (removed_post, error) {
          }
        })
      })
  }
}
// this.props.actions.posts_update(post_id, )
// this.props.actions.posts_remove(post_id)
