import React, { Component } from 'react';
import _ from 'lodash'

import Loader from './Loader'

export default class Notes extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.notes_read()
  }

  addNote(event) {
    event.preventDefault()
    const self = this
    const result = this.props.actions.notes_create(
      event.target.body.value,
      event.target.username.value,
      event.target.critical.checked
    )
      .then((success) => {
        console.log('woopwoop')
      }, (error) => {
        console.log('Something went wrong, dont clear', error)
      })
  }

  render() {
    let renderNotes = ''

    if (this.props.isLoading) renderNotes = <Loader />

    else {
      renderNotes = (
        <div className="notes-main">
          {/* <form className="notes-form" onSubmit={(event) => this.addNote(event)}>
            <input type="text" name="body" />
            <input type="text" name="username" />
            <div className="ui checkbox">
            <input name="critical" type="checkbox" />
            <label>Label</label>
            </div>
            <input type="submit" value="Add" />
          </form> */}

          {_.isEmpty(this.props.data) ? (<p>Empty set </p>) : ''}


          { this.props.data.map(data => {

            const notes_id = data.id
            return (
              <div key={notes_id} className="ui raised segment">
                <p style={{ fontSize: '1.5rem' }}>
                  {data.get('body')} {/* }({data.get('username')}, {data.get('critical')}) */}
                </p>
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
