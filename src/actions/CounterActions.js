import axios from 'axios'

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';


export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

function fetchSecretSauce() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users')
  return request
  // return axios.get('http://mbit.fi')
}

export function axiosTest() {
  return function (dispatch) {
    return fetchSecretSauce().then(
      () => dispatch(increment())
    )
  }
}
