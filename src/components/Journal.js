import React, { Component } from 'react';
import _ from 'lodash'
import moment from 'moment'

import Loader from './Loader'

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

  renderForm() {
    // debugger
    if (this.state.displayForm) {
      return (
        <form className="ui form" onSubmit={(event) => this.addPost(event)}>
          <div className="field">
            <textarea autoFocus name="body" rows="3"></textarea>
          </div>
          <input type="text" name="username" />

          Tärkeysaste
          <select name="importance" className="ui dropdown">
            <option value="0">Normaali</option>
            <option value="1">Tärkeä</option>
            <option value="2">Kriittinen</option>
          </select>
          <button type="button" className="ui button" onClick={ () => this.setState({ displayForm: false }) }>Hylkää</button>
          <input type="submit" value="Post" />
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

          <h2>Päivyri</h2>

          { this.renderForm() }

          {_.isEmpty(this.props.data) ? (<p>Ei merkintöjä ;)</p>) : ''}

          { this.props.data.map(data => {
            const createdAt = data.get('createdAt')
            return (
              <div key={data.id} className={data.get('importance') !== 0 ? 'ui divided grid tertiary inverted red segment journal-entry' : 'ui divided grid segment journal-entry' }>
                <div className="two wide column journal-mornnoon">
                  {this.printSun(data.get('createdAt'))}
                </div>
                <div className="two wide column">
                  <div className="date">{ _.capitalize(moment(createdAt).format('ddd D.M')) }</div>
                </div>
                <div className="twelve wide column">
                  <p>
                    {data.get('body')}
                  </p>
                </div>
                {/* <button onClick={() => this.props.actions.journal_delete(data.id)}>X</button> */}
              </div>
            )
          })}

        </div>
      )
    }

    return renderJournal
  }
}
