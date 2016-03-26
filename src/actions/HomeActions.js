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

// this.props.actions.posts_get()
// this.props.actions.posts_add(content)
// this.props.actions.posts_update(post_id, )
// this.props.actions.posts_remove(post_id)

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


// function parse_fetchAllPosts() {
//   const PostObject = Parse.Object.extend('PostObject')
//   const query = new Parse.Query(PostObject)
//   return query.find({
//     success: (results) => {
//       // console.log('success')
//     },
//     error: (error) => {
//       // console.log(error)
//     }
//   })
// }
//
// export function fetchem() {
//   return function (dispatch) {
//     return parse_fetchAllPosts().then(
//       (posts) => dispatch(aboutFetchPosts(posts))
//     )
//   }
// }
//
// // function fetchSecretSauce() {
// //   const request = axios.get('http://jsonplaceholder.typicode.com/users')
// //   return request
// //   // return axios.get('http://mbit.fi')
// // }
// //
// // export function axiosTest() {
// //   return function (dispatch) {
// //     return fetchSecretSauce().then(
// //       () => dispatch(increment())
// //     )
// //   }
// // }
