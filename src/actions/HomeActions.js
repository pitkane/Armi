import Axios from 'axios'
import Parse from 'parse'

import {
  POSTS_REQUEST_DATA,
  POSTS_RECEIVE_DATA,
  POSTS_RECEIVE_ERROR } from '../constants/ActionTypes';

function postsRequestData() {
  return {
    type: POSTS_REQUEST_DATA
  }
}

function postsReceiveData(json) {
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
        dispatch(postsReceiveData(results));
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
    // newPost.set('user', 'Ou0rtpCRVV')
    newPost.set('importance', 0)
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

// this.props.actions.posts_get()
// this.props.actions.posts_add(body)
// this.props.actions.posts_update(post_id, )
// this.props.actions.posts_remove(post_id)
