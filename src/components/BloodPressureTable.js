import React, { Component } from 'react'
import classNames from 'classnames'

export default class BloodPressureTable extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table className="ui large  table inverted red">
        <thead>
          <tr>
            <th style={{ boxShadow: 'none' }}></th>
            <th className="center aligned">Alapaine</th>
            <th className="center aligned">Yläpaine</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td className="collapsing">
              <b>28.3</b>
            </td>
            <td className="center aligned">136 <i className=" green checkmark icon"></i></td>
            <td className="center aligned">82 <i className=" black remove icon"></i></td>
          </tr>

          <tr>
            <td className="collapsing">
              <b>26.3</b>
            </td>
            <td className="center aligned">138 <i className=" green checkmark icon"></i></td>
            <td className="center aligned">84 <i className=" green checkmark icon"></i></td>
          </tr>

          <tr>
            <td className="collapsing">
              <b>23.3</b>
            </td>
            <td className="center aligned">133 <i className=" green checkmark icon"></i></td>
            <td className="center aligned">80 <i className=" green checkmark icon"></i></td>
          </tr>

          <tr>
            <td className="collapsing">
              <b>19.3</b>
            </td>
            <td className="center aligned">125 <i className=" green checkmark icon"></i></td>
            <td className="center aligned">92 <i className=" green checkmark icon"></i></td>
          </tr>

          <tr>
            <td className="collapsing">
              <b>17.3</b>
            </td>
            <td className="center aligned">140 <i className=" green checkmark icon"></i></td>
            <td className="center aligned">99 <i className=" black remove icon"></i></td>
          </tr>

          <tr>
            <td className="collapsing">
              <b>16.3</b>
            </td>
            <td className="center aligned">136 <i className=" black remove icon"></i></td>
            <td className="center aligned">82 <i className=" green checkmark icon"></i></td>
          </tr>

          <tr>
            <td className="collapsing">
              <b>15.3</b>
            </td>
            <td className="center aligned">136 <i className=" green checkmark icon"></i></td>
            <td className="center aligned">82 <i className=" black remove icon"></i></td>
          </tr>

        </tbody>
      </table>
    )
  }
}
