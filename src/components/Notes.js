import React, { Component } from 'react';
import _ from 'lodash'
import Parse from 'parse'

import Loader from './Loader'

import NotesItem from './NotesItem'

export default class Notes extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.notes_read()

    const query = new Parse.Query('Notes')
    const subscription = query.subscribe()
    subscription.on('create', (item) => { this.props.actions.notes_read() });
    subscription.on('delete', (item) => { this.props.actions.notes_read() });
    subscription.on('update', (item) => { this.props.actions.notes_read() });
  }

  render() {
    let renderNotes = ''

    if (this.props.isLoading) renderNotes = <Loader />

    else {
      renderNotes = (
        <div className="notes-main">

          {_.isEmpty(this.props.data) ? (<p>Empty set </p>) : ''}

          { this.props.data.map(data => {
            return <NotesItem dispatch={this.props.dispatch} key={data.id} data={data} actions={this.props.actions} />
          })}

        </div>
      )
    }

    return renderNotes
  }
}
