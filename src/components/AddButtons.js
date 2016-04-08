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
        this.setState({ displayForm: false })
      }, (error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="">empty</div>
    )
  }
}
