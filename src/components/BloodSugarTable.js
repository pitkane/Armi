import React, { Component } from 'react'
import classNames from 'classnames'

export default class BloodSugarTable extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table className="ui large table inverted orange">
        <thead>
          <tr>
            <th style={{ background: '', boxShadow: 'none' }}></th>
            <th className="center aligned">Aamu</th>
            <th className="center aligned">Ilta</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td className="collapsing">
              <b>15.3</b>
            </td>
            <td className="center aligned">4 (ruoan jälkeen) </td>
            <td className="center aligned">10 (ennen ruokaa) </td>
          </tr>

          <tr>
            <td className="collapsing">
              <b>16.3</b>
            </td>
            <td className="center aligned">4 (ennen ruokaa) </td>
            <td className="center aligned">10 (ruoan jälkeen) </td>
          </tr>

          <tr>
            <td className="collapsing">
              <b>19.3</b>
            </td>
            <td className="center aligned">6 (ruoan jälkeen) </td>
            <td className="center aligned">10 (ennen ruokaa) </td>
          </tr>

        </tbody>
      </table>
    )
  }
}
