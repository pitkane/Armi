import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import moment from 'moment'
import classNames from 'classnames'
import * as NotesActions from '../actions/NotesActions'

import Loader from './Loader'

export default class NotesForm extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  addNote(event) {
    console.log(this.props)
    event.preventDefault()
    const self = this
    const result = this.props.actions.notes_create(
      event.target.body.value,
      'anonymous',
      // event.target.username.value,
      event.target.critical.checked
    )
      .then((success) => {
        console.log('woopwoop')
      }, (error) => {
        console.log('Something went wrong, dont clear', error)
      })
  }

  render() {
    return (
      <form className="notes-form" onSubmit={(event) => this.addNote(event)}>
        <input type="text" name="body" />
        {/* <input type="text" name="username" /> */}
        <div className="ui checkbox">
          <input name="critical" type="checkbox" />
          <label>Label</label>
        </div>
        <input type="submit" value="Add" />
        <button type="button" className="ui button right floated" onClick={ this.props.closeForm }>Hylkää</button>
      </form>
    )
  }
}
