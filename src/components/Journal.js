import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import classNames from 'classnames'

import Loader from './Loader'
import JournalEntry from './JournalEntry'

export default class Journal extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.journal_read()
  }

  render() {
    return (

      <div className="journal-main">

        {_.isEmpty(this.props.data) ? (<Loader />) : ''}

        { this.props.data.map(data => {
          return <JournalEntry key={data.id} data={data} actions={this.props.actions} />
        })}

      </div>
    )
  }
}
