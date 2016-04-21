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
    event.preventDefault()

    if (this.props.editing) {
      console.log(this)
      this.props.actions.notesUpdate(
        this.props.editObject,
        event.target.body.value,
        event.target.critical.checked
      )
        .then((success) => {
          console.log('Note updated succesfully')
          this.props.closeForm()
        }, (error) => {
          console.log('Something went wrong, dont clear', error)
        })
    } else {
      this.props.actions.notesCreate(
        event.target.body.value,
        'anonymous',
        event.target.critical.checked
      )
        .then((success) => {
          console.log('Note added succesfully')
          this.props.closeForm()
        }, (error) => {
          console.log('Something went wrong, dont clear', error)
        })
    }
  }

  render() {
    return (
      <div className="ui grid" style={{ paddingBottom: '20px' }}>
        <div className="ui sixteen wide container">
          <form className="ui form notes-form" onSubmit={(event) => this.addNote(event)}>

            <div className="field">
              <div className="sixteen wide field">
                <label>Muistiinpano:</label>
                <input type="text" name="body" defaultValue={this.props.editing ? this.props.editObject.get('body') : ''} />
              </div>
            </div>
            <div className="field">
              <div className="sixteen wide field">
                <div className="ui checkbox">
                  <input name="critical" type="checkbox" />
                  <label>Onko merkintä tärkeä?</label>
                </div>
              </div>
            </div>
            <input type="submit" className="ui primary button right floated" value={this.props.editing ? 'Päivitä muistiinpano' : 'Lisää muistiinpano' } />
            <button type="button" className="ui button right floated" onClick={ this.props.closeForm }>Hylkää</button>
          </form>
        </div>
      </div>
    )
  }
}
