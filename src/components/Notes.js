import React, { Component } from 'react';
import _ from 'lodash'
import Parse from 'parse'

import Loader from './Loader'

export default class Notes extends Component {

  constructor(props) {
    super(props)
    this.state = { hovered: false }
  }

  componentDidMount() {
    this.props.actions.notes_read()

    const query = new Parse.Query('Notes')
    const subscription = query.subscribe()
    subscription.on('create', (item) => {
      // console.log(item.get('body'));
      console.log('dispatch refresh for Notes')
      this.props.actions.notes_read()
    });
    subscription.on('delete', (item) => {
      // console.log(item.get('body'));
      console.log('dispatch refresh for Notes')
      this.props.actions.notes_read()
    });
  }

  render() {
    let renderNotes = ''

    if (this.props.isLoading) renderNotes = <Loader />

    else {
      renderNotes = (
        <div className="notes-main">

          {_.isEmpty(this.props.data) ? (<p>Empty set </p>) : ''}

          { this.props.data.map(data => {
            const notes_id = data.id
            return (
              <div key={notes_id} className="ui raised segment"
                onMouseEnter={() => {this.setState({ hovered: true })}}
                onMouseLeave={() => {this.setState({ hovered: false })}}
              >
                <p
                  style={{ fontSize: '1.5rem' }}

                >
                  {data.get('body')} {/* }({data.get('username')}, {data.get('critical')}) */}

                </p>
                {this.state.hovered ? (<button onClick={() => this.props.actions.notes_delete(data.id)} className="ui blue button delete-button">Poista...</button>) : '' }
                {/* <button onClick={() => this.props.actions.notes_delete(notes_id)}>X</button> */}
              </div>
            )
          })}

        </div>
      )
    }

    return renderNotes
  }
}
