import React, { Component } from 'react';
import _ from 'lodash'
import Parse from 'parse'

import Loader from './Loader'

export default class NotesItem extends Component {

  constructor(props) {
    super(props)
    this.state = { hovered: false }
  }

  _renderButtons() {
    // console.log(this)
    return (
      <div className="action-buttons">
        <button
          className="ui blue button delete-button"
          onClick={() => this.props.actions.notes_delete(this.props.data.id)}
        >
          Poista...
        </button>

        <button
          className="ui green button edit-button"
          onClick={() => this.props.dispatch({ type: 'FORMS_EDIT', payload: { object: this.props.data, form: 'notes' } })}
        >
          Editoi...
        </button>
      </div>
    )
  }

  render() {
    const data = this.props.data
    return (
      <div
        className="ui raised segment"
        key={data.id}
        onMouseEnter={() => {this.setState({ hovered: true })}}
        onMouseLeave={() => {this.setState({ hovered: false })}}
      >
        <p style={{ fontSize: '1.5rem' }} >
          {data.get('body')}
        </p>

        {this.state.hovered ? this._renderButtons() : ''}
        {/* {this.state.hovered ? (<button onClick={() => this.props.actions.notes_delete(data.id)} className="ui blue button delete-button">Poista...</button>) : '' } */}

      </div>
    )
  }
}
