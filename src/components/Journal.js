import React, { Component } from 'react';
import _ from 'lodash'

import Loader from './Loader'

export default class Journal extends Component {

  constructor(props) {
    super(props)
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
      }, (error) => {
        console.log(error)
      })
  }

  render() {
    let renderJournal = ''

    if (this.props.isLoading) renderJournal = <Loader />
    else {
      renderJournal = (
        <div className="view-container">
          <form onSubmit={(event) => this.addPost(event)}>
            <textarea name="body" ></textarea>
            <input type="text" name="username" />

            Tärkeysaste
            <select name="importance" className="ui dropdown">
              <option value="0">Normaali</option>
              <option value="1">Tärkeä</option>
              <option value="2">Kriittinen</option>
            </select>
            <input type="submit" value="Post" />
          </form>

          {_.isEmpty(this.props.data) ? (<p>Empty set </p>) : ''}
          <ul>
            { this.props.data.map(data => {
              const post_id = data.id
              return (
                <li key={post_id}>
                  {data.get('body')},
                  {data.get('username')},
                  {data.get('importance')}
                  <button onClick={() => this.props.actions.journal_delete(post_id)}>X</button>
                </li>
              )
            })}
          </ul>

        </div>
      )
    }

    return renderJournal
  }
}
