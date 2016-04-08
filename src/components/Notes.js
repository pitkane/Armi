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
