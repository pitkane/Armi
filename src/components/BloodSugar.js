import React, { Component } from 'react';
import _ from 'lodash'
import moment from 'moment'
import Parse from 'parse'

import Loader from './Loader'

import BloodSugarItem from './BloodSugarItem'

class BloodSugar extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.bsRead()

    const query = new Parse.Query('BloodSugar')
    const subscription = query.subscribe()
    subscription.on('create', (item) => { this.props.actions.bsRead() });
    subscription.on('delete', (item) => { this.props.actions.bsRead() });
    subscription.on('update', (item) => { this.props.actions.bsRead() });
  }

  _renderRow(data) {
    // console.log(data)
    return (
      <tr key={data.id}>
        <td className="collapsing">
          <b>{ _.capitalize(moment(data.createdAt).format('ddd D.M')) }</b>
        </td>
        <td className="center aligned">{data.get('value')}</td>
        <td className="center aligned">{data.get('notes')}</td>
      </tr>
    )
  }

  render() {
    let renderBloodSugar = ''

    if (this.props.isLoading) renderBloodSugar = <Loader />

    else {
      renderBloodSugar = (
        <div className="bloodsugar-main">

          {_.isEmpty(this.props.data) ? (<p>Empty set </p>) : ''}

          <table className="ui large table inverted orange">
            <thead>
              <tr>
                <th style={{ background: '', boxShadow: 'none' }}></th>
                <th className="center aligned">Arvo</th>
                <th className="center aligned">Huomiot</th>
              </tr>
            </thead>
            <tbody>

              { this.props.data.map(data => {
                return <BloodSugarItem dispatch={this.props.dispatch} key={data.id} data={data} actions={this.props.actions} />
              })}

            </tbody>
          </table>

        </div>
      )
    }

    return renderBloodSugar
  }
}

export default BloodSugar


            /* <ul>
            { this.props.data.map(data => {
            const bs_id = data.id
            return (
            <li key={bs_id}>{data.get('value')}
        <button onClick={() => this.props.actions.bsDelete(bs_id)}>X</button>
      </li>
    )
  })}
</ul> */
