import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import Parse from 'parse'

import Loader from './Loader'

import BloodPressureItem from './BloodPressureItem'

export default class BloodPressure extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.bpRead()

    const query = new Parse.Query('BloodPressure')
    const subscription = query.subscribe()
    subscription.on('create', (item) => { this.props.actions.bpRead() });
    subscription.on('delete', (item) => { this.props.actions.bpRead() });
    subscription.on('update', (item) => { this.props.actions.bpRead() });
  }

  render() {
    let renderBP = ''

    if (this.props.isLoading) renderBP = <Loader />

    else {
      renderBP = (
        <div className="bloodpressure-main">


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
                return <BloodPressureItem dispatch={this.props.dispatch} key={data.id} data={data} actions={this.props.actions} />
              })}

            </tbody>
          </table>
        </div>
      )
    }
    return renderBP
  }
}
