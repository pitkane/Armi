import Axios from 'axios'
import Parse from 'parse'

import { ABOUT_FETCH_POSTS } from '../constants/ActionTypes';


export function aboutFetchPosts(posts) {
  return {
    type: ABOUT_FETCH_POSTS,
    payload: posts
  };
}

function parse_fetchAllPosts() {
  const PostObject = Parse.Object.extend('PostObject')
  const query = new Parse.Query(PostObject)
  return query.find({
    success: (results) => {
      // console.log('success')
    },
    error: (error) => {
      // console.log(error)
    }
  })
}

export function fetchem() {
  return function (dispatch) {
    return parse_fetchAllPosts().then(
      (posts) => dispatch(aboutFetchPosts(posts))
    )
  }
}

// function fetchSecretSauce() {
//   const request = axios.get('http://jsonplaceholder.typicode.com/users')
//   return request
//   // return axios.get('http://mbit.fi')
// }
//
// export function axiosTest() {
//   return function (dispatch) {
//     return fetchSecretSauce().then(
//       () => dispatch(increment())
//     )
//   }
// }
