import React, { Component } from 'react';
import _ from 'lodash'

import Loader from './Loader'

export default class BloodSugar extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.bs_read()
  }

  addBS(event) {
    event.preventDefault()
    const self = this
    const result = this.props.actions.bs_create(
      event.target.value.value,
      event.target.food.checked
    )
      .then((success) => {
        // self.clearForm()
        // self.reloadData()
        console.log('woopwoop')
      }, (error) => {
        console.log('Something went wrong, dont clear', error)
      })
  }

  render() {
    let renderBloodSugar = ''

    if (this.props.isLoading) renderBloodSugar = <Loader />

    else {
      renderBloodSugar = (
        <div className="bloodsugar">
          <form onSubmit={(event) => this.addBS(event)}>
            <input type="text" name="value" />
            <div className="ui checkbox">
              <input name="food" type="checkbox" />
              <label>Label</label>
            </div>
            <input type="submit" value="Add" />
          </form>

          {_.isEmpty(this.props.data) ? (<p>Empty set </p>) : ''}

          <ul>
            { this.props.data.map(data => {
              const bs_id = data.id
              return (
                <li key={bs_id}>{data.get('value')}
                  <button onClick={() => this.props.actions.bs_delete(bs_id)}>X</button>
                </li>
              )
            })}
          </ul>
          
        </div>
      )
    }

    return renderBloodSugar
  }
}
