import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import moment from 'moment'
import classNames from 'classnames'
import * as BloodSugarActions from '../actions/BloodSugarActions'

import Loader from './Loader'

export default class BloodSugarForm extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  _addBSEntry(event) {
    event.preventDefault()
    this.props.actions.bsCreate(
      event.target.bsValue.value,
      event.target.notes.value
    )
      .then((success) => {
        console.log('Added new bloodsugar entry')
        this.props.closeForm()
      }, (error) => {
        console.log('Something went wrong, dont clear', error)
      })
  }

  render() {
    return (
      <div className="ui grid" style={{ paddingBottom: '20px' }}>
        <div className="ui sixteen wide container">
          <form className="ui form bloodsugar-form" onSubmit={(event) => this._addBSEntry(event)}>

            <div className="fields">
              <div className="eight wide field">
                <label>Verensokeriarvo:</label>
                <input type="text" name="bsValue" />
              </div>
              <div className="eight wide field">
                <label>Huomiot:</label>
                <input type="text" name="notes" />
              </div>
            </div>
            <input type="submit" className="ui primary button right floated" value="Lisää merkintä" />
            <button type="button" className="ui button right floated" onClick={ this.props.closeForm }>Hylkää</button>
          </form>
        </div>
      </div>
    )
  }
}
