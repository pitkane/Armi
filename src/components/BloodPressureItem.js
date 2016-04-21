import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import moment from 'moment'

import Loader from './Loader'

export default class BloodPressureItem extends Component {

  constructor(props) {
    super(props)
    this.state = { hovered: false }
  }

  render() {
    const data = this.props.data
    return (
      <tr key={data.id}
        onMouseEnter={() => {this.setState({ hovered: true })}}
        onMouseLeave={() => {this.setState({ hovered: false })}}
      >
        <td className="collapsing">
          <b>{ _.capitalize(moment(data.createdAt).format('ddd D.M')) }</b>
        </td>
        <td className="center aligned">{data.get('diastolic')} <i className=" green checkmark icon"></i></td>
        <td className="center aligned">
          {data.get('systolic')} <i className=" green checkmark icon"></i>
          {this.state.hovered ? (<button onClick={() => this.props.actions.bpDelete(data.id)} className="ui blue button delete-button action-buttons ">X</button>) : '' }
        </td>
      </tr>
    )
  }
}
