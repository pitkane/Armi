import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import classNames from 'classnames'

import Loader from './Loader'

export default class JournalForm extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.ui.dropdown').dropdown()
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.editObject.get('importance'))
    if (nextProps.editing) {
      $('.ui.dropdown').dropdown('set selected', nextProps.editObject.get('importance'))
    }
  }

  _SubmitForm(event) {
    event.preventDefault()
    console.log(this)
    // if update
    if (this.props.editing) {
      this.props.actions.journalUpdate(
        this.props.editObject,
        event.target.body.value,
        event.target.username.value,
        event.target.importance.value
      )
        .then((success) => {
          console.log('(JournalForm: journalUpdate) Success')
          this.props.closeForm()
        }, (error) => {
          console.log(error)
        })
    } else { // new entry
      this.props.actions.journal_create(
        event.target.body.value,
        event.target.username.value,
        event.target.importance.value
      )
        .then((success) => {
          console.log('(JournalForm: journal_create) Success')
          this.props.closeForm()
        }, (error) => {
          console.log(error)
        })
    }
  }

  render() {
    // if in edit mode -> fill fields
    if (this.props.editing) {
      // fill body

      // fill username

      // change importance
    }

    return (
      <div className="ui grid" style={{ paddingBottom: '20px' }}>
        <div className="ui sixteen wide container">
          <form className="ui form" onSubmit={ (event) => this._SubmitForm(event) }>
            <div className="field">
              <textarea
                autoFocus
                name="body"
                rows="3"
                defaultValue={this.props.editing ? this.props.editObject.get('body') : ''}
                placeholder="Lisää teksti...">

              </textarea>
            </div>
            <div className="fields">
              <div className="eight wide field">
                <label>Kirjoittaja</label>

                <input type="text" name="username" defaultValue={this.props.editing ? this.props.editObject.get('username') : ''} />
              </div>
              <div className="eight wide field">
                <label>Tärkeysaste</label>
                <select name="importance" className="ui importance selection dropdown">
                  <option value="0">Normaali</option>
                  <option value="1">Tärkeä</option>
                  <option value="2">Kriittinen</option>
                </select>
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
