import Axios from 'axios'
import Parse from 'parse'
import _ from 'lodash'

import {
  BP_REQUEST_DATA,
  BP_RECEIVE_DATA,
  BP_ERROR } from '../constants/ActionTypes';

function bpRequestData() {
  return {
    type: BP_REQUEST_DATA
  }
}

function bpReceiveData(json) {
  return {
    type: BP_RECEIVE_DATA,
    data: json
  }
}

function bpReceiveError(json) {
  return {
    type: BP_ERROR,
    data: json
  }
}


export function bp_read() {
  return function (dispatch) {
    dispatch(bpRequestData())

    const BloodPressureObject = Parse.Object.extend('BloodPressure')
    const query = new Parse.Query(BloodPressureObject)

    return query.find({
      success: (results) => {
        return setTimeout(() => {
          dispatch(bpReceiveData(results))
        }, 2050);
      },
      error: (error) => { }
    })
  }
}

export function bp_create(diastolic = 0, systolic = 0) {
  return (dispatch) => {
    dispatch(bpRequestData())
    const BloodPressureObject = Parse.Object.extend('BloodPressure')
    const newBP = new BloodPressureObject
    // newBP.set('value', _.round(_.toNumber(value.replace(',', '.')), 2))
    newBP.set('diastolic', diastolic)
    newBP.set('systolic', systolic)
    newBP.set('creationDate', new Date())
    return newBP.save(null, {
      success: (bp) => {
        // We can dispatch something here if needed
        dispatch(bp_read())
      },
      error: (bp, error) => {
        console.log(bp, error)
        // Or, we can dispatch something concerning about the error here
      }
    })
  }
}

export function bp_delete(bs_id) {
  return function (dispatch) {
    dispatch(bpRequestData())

    const BloodSugarObject = Parse.Object.extend('BloodSugar');
    const query = new Parse.Query(BloodSugarObject);
    // debugger
    return query.get(bs_id)
      .then((bs) => {
        return bs.destroy({
          success: function (removed_bs) {
            dispatch(bp_read());
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

export function bp_update(bloodsugar_id, new_body) {

}
