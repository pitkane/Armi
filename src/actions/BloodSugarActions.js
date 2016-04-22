import Parse from 'parse'
import _ from 'lodash'

import {
  BS_REQUEST_DATA,
  BS_RECEIVE_DATA,
  BS_ERROR } from '../constants/ActionTypes';

function bsRequestData() {
  return {
    type: BS_REQUEST_DATA
  }
}

function bsReceiveData(json) {
  return {
    type: BS_RECEIVE_DATA,
    data: json
  }
}

function bsReceiveError(json) {
  return {
    type: BS_ERROR,
    data: json
  }
}


export function bsRead() {
  return function (dispatch) {
    dispatch(bsRequestData())

    const BloodSugarObject = Parse.Object.extend('BloodSugar')
    const query = new Parse.Query(BloodSugarObject)

    return query.descending('createdAt').find({
      success: (results) => {
        return setTimeout(() => {
          dispatch(bsReceiveData(results))
        }, 2050);
      },
      error: (error) => { }
    })
  }
}

export function bsCreate(value, notes = '') {
  return (dispatch) => {
    dispatch(bsRequestData())
    const BloodSugarObject = Parse.Object.extend('BloodSugar')
    const newBS = new BloodSugarObject
    newBS.set('value', _.round(_.toNumber(value.replace(',', '.')), 2))
    newBS.set('notes', notes)
    return newBS.save(null, {
      success: (bs) => {
        // We can dispatch something here if needed
        dispatch(bsRead())
      },
      error: (bs, error) => {
        console.log(bs, error)
        // Or, we can dispatch something concerning about the error here
      }
    })
  }
}

export function bsDelete(bs_id) {
  return function (dispatch) {
    dispatch(bsRequestData())

    const BloodSugarObject = Parse.Object.extend('BloodSugar');
    const query = new Parse.Query(BloodSugarObject);
    // debugger
    return query.get(bs_id)
      .then((bs) => {
        return bs.destroy({
          success: function (removed_bs) {
            dispatch(bsRead());
          },
          error: function (removed_bs, error) {
          }
        })
      })

    // return setTimeout(() => {
    //   // Yay! Can invoke sync or async actions with `dispatch`
    //   dispatch(bsReceiveData([]));
    // }, 2000);
  }
}

export function bs_update(bloodsugar_id, new_body) {

}
