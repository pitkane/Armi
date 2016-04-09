import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

import Loader from './Loader'

export default class BloodPressureTable extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.bp_read()
  }

  render() {
    let renderBP = ''

    if (this.props.isLoading) renderBP = <Loader />

    else {
      renderBP = (
        <div className="bloodpressure-table">


          <table className="ui large  table inverted red">
            <thead>
              <tr>
                <th style={{ boxShadow: 'none' }}></th>
                <th className="center aligned">Alapaine</th>
                <th className="center aligned">Yläpaine</th>
              </tr>
            </thead>
            <tbody>
              { this.props.data.map(data => {
                const bp_id = data.id
                return (
                  <tr key={bp_id}>
                    <td className="collapsing">
                      <b>28.3</b>
                    </td>
                    <td className="center aligned">{data.get('diastolic')} <i className=" green checkmark icon"></i></td>
                    <td className="center aligned">{data.get('systolic')} <i className=" green checkmark icon"></i></td>
                    {/* <td className="center aligned">{data.get('systolic')} <i className=" black remove icon"></i></td> */}
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      )
    }
    return renderBP
  }
}
