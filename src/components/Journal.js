import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import classNames from 'classnames'
import Parse from 'parse'

import Loader from './Loader'
import JournalItem from './JournalItem'

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

        { this.props.isLoading ? <Loader /> : '' }

        {/* {_.isEmpty(this.props.data) ? (<Loader />) : ''} */}

        { this.props.data.map(data => {
          return <JournalItem dispatch={this.props.dispatch} key={data.id} data={data} actions={this.props.actions} />
        })}

      </div>
    )
  }
}
