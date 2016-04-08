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
          renderForm = (<JournalForm closeForm={ () => this.props.forms_actions.closeForm() }/>)
          break

        case 'notes':
          renderForm = (<NotesForm closeForm={ () => this.props.forms_actions.closeForm() }/>)
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
