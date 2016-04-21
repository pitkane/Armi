import React, { Component } from 'react';
import _ from 'lodash'
import moment from 'moment'

import Loader from './Loader'

export default class BloodSugarItem extends Component {

  constructor(props) {
    super(props)
    this.state = { hovered: false }
  }

  render() {
    const data = this.props.data
    return (
      <tr
        key={data.id}
        onMouseEnter={() => {this.setState({ hovered: true })}}
        onMouseLeave={() => {this.setState({ hovered: false })}}
      >
        <td className="collapsing">
          <b>{ _.capitalize(moment(data.createdAt).format('ddd D.M')) }</b>
        </td>
        <td className="center aligned">{data.get('value')}</td>
        <td className="center aligned">
          {data.get('notes')}
          {this.state.hovered ? (<button onClick={() => this.props.actions.bsDelete(data.id)} className="ui blue button delete-button action-buttons ">X</button>) : '' }
        </td>

      </tr>
    )
  }
}
