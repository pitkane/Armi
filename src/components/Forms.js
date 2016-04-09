import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import classNames from 'classnames'

import Loader from './Loader'
import Modal from './Modal'
import Button from './Button'
import JournalEntry from './JournalEntry'

import JournalForm from './JournalForm'
import NotesForm from './NotesForm'
import BloodPressureForm from './BloodPressureForm'
import BloodSugarForm from './BloodSugarForm'

export default class Journal extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    console.log(this.props)

    let renderForm = ''
    if (this.props.state.displayForm === true) {
      switch (this.props.state.form) {
        case 'journal':
          renderForm = (<JournalForm actions={this.props.journal_actions} closeForm={ () => this.props.forms_actions.closeForm() }/>)
          break

        case 'notes':
          renderForm = (<NotesForm actions={this.props.notes_actions} closeForm={ () => this.props.forms_actions.closeForm() }/>)
          break

        case 'bloodpressure':
          renderForm = (<BloodPressureForm actions={this.props.bloodpressure_actions} closeForm={ () => this.props.forms_actions.closeForm() }/>)
          break

        case 'bloodsugar':
          renderForm = (<BloodSugarForm actions={this.props.bloodsugar_actions} closeForm={ () => this.props.forms_actions.closeForm() }/>)
          break

        default:
          renderForm = ''

      }
    }


    let renderButtons = ''
    if (this.props.state.displayForm === false) {
      renderButtons = (
        <div className="journal-buttons">

          <button className="huge ui labeled icon primary button" onClick={() => this.props.forms_actions.changeForm('journal')}>
            <i className="calendar icon"></i>
            Päivyrimerkintä
          </button>

          <button className="huge ui labeled icon red button" onClick={() => this.props.forms_actions.changeForm('bloodpressure')}>
            <i className="heart icon"></i>
            Verenpaine
          </button>

          <button className="huge ui orange button" onClick={() => this.props.forms_actions.changeForm('bloodsugar')}>
            <i className="treatment icon"></i>
            Verensokeri
          </button>

          <button className="huge ui labeled icon yellow button" onClick={() => this.props.forms_actions.changeForm('notes')}>
            <i className="write icon"></i>
            Muistiinpano
          </button>

        </div>
      )
    }


    return (

      <div className="forms-main">

        { renderButtons }

        { renderForm }

      </div>
    )
  }
}
