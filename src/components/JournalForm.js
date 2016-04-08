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
      }, (error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="ui grid" style={{ paddingBottom: '20px' }}>
        <div className="ui sixteen wide container">
          <form className="ui form" onSubmit={ (event) => this.addPost(event) }>
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
            <input type="submit" className="ui primary button right floated" value="Lisää merkintä" />
            <button type="button" className="ui button right floated" onClick={ this.props.closeForm }>Hylkää</button>
          </form>
        </div>
      </div>
    )
  }
}
