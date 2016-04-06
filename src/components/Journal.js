import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import classNames from 'classnames'

import Loader from './Loader'
import Modal from './Modal'
import Button from './Button'
import JournalEntry from './JournalEntry'

export default class Journal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayForm: false
    }
  }

  componentDidMount() {
    $('.ui.dropdown').dropdown()
    this.props.actions.journal_read()

    $('.ui.modal').modal({
      onApprove: () => {
        // window.alert('Approved!')
      }
    })
  }

  addPost(event) {
    event.preventDefault()
    const self = this
    const posts_actions = this.props

    const result = this.props.actions.journal_create(
      event.target.body.value,
      event.target.username.value,
      event.target.importance.value
    )
      .then((success) => {
        console.log('(Home: addPost) Success')
        this.setState({ displayForm: false })
      }, (error) => {
        console.log(error)
      })
  }

  printSun(date) {
    // console.log(date)
    const currentHour = moment(date).format('HH')
    // console.log(currentHour)
    // debugger
    if (currentHour < 14) {
      return (<i className="sun huge yellow icon"></i>)
    } else {
      return (<i className="moon huge grey icon"></i>)
    }
  }

  confirmDiscard() {
    $('.ui.modal').modal('show')
  }

  renderForm() {
    // debugger
    if (this.state.displayForm) {
      return (
        <form className="ui form" onSubmit={(event) => this.addPost(event)}>
          <div className="field">
            <textarea autoFocus name="body" rows="3" placeholder="Lisää teksti..."></textarea>
          </div>
          <div className="fields">
            <div className="eight wide field">
              <label>Kirjoittaja</label>

              <input type="text" name="username" />
            </div>
            <div className="eight wide field">
              <label>Tärkeysaste</label>
              <select name="importance" className="ui selection dropdown">
                <option value="0">Normaali</option>
                <option value="1">Tärkeä</option>
                <option value="2">Kriittinen</option>
              </select>
            </div>
          </div>
          <input type="submit" className="ui primary button" value="Lisää merkintä" />
          <button type="button" className="ui button right floated" onClick={ () => { $('.ui.modal').show() } }>Hylkää</button>
        </form>
      )
    } else {
      return (
        <div className="journal-buttons">
          <button className="ui labeled icon primary button" onClick={ () => this.setState({ displayForm: true }) }>
            <i className="calendar icon"></i>
            Päivyrimerkintä
          </button>
          <button className="ui orange button">
            Verensokeri
          </button>
          <button className="ui labeled icon red button">
            <i className="heart icon"></i>
            Verenpaine
          </button>
        </div>
      )
    }
  }

  render() {
    let renderJournal = ''

    if (this.props.isLoading) renderJournal = <Loader />
    else {
      renderJournal = (
        <div className="journal-main">

          <Modal />

          <h2>Päivyri</h2>

          { this.renderForm() }

          {_.isEmpty(this.props.data) ? (<p>Ei merkintöjä ;)</p>) : ''}

          { this.props.data.map(data => { return <JournalEntry data={data} actions={this.props.actions} /> })}

        </div>
      )
    }

    return renderJournal
  }
}
