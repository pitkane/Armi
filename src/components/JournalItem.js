import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import classNames from 'classnames'

import Button from './Button'

export default class JournalEntry extends Component {

  constructor(props) {
    super(props)
    this.state = { hovered: false }
  }

  componentDidMount() {
  }

  printSun(date) {
    // console.log(date)
    const currentHour = moment(date).format('HH')
    // console.log(currentHour)
    // debugger
    if (currentHour < 14) {
      return (<i className="sun huge yellow icon"></i>)
    } else {
      return (<i className="moon huge grey icon"></i>)
    }
  }

  _renderButtons() {
    // console.log(this)
    return (
      <div className="action-buttons">
        <button
          className="ui blue button delete-button"
          onClick={() => this.props.actions.journal_delete(this.props.data.id)}
        >
          Poista...
        </button>

        <button
          className="ui green button edit-button"
          onClick={() => this.props.dispatch({ type: 'FORMS_EDIT', payload: { object: this.props.data, form: 'journal' } })}
        >
          Editoi...
        </button>
      </div>
    )
  }

  render() {
    const { data } = this.props
    const creationDate = data.get('creationDate')

    const bodyClass = classNames({
      // 'twelve': !this.state.hovered,
      // 'eight': this.state.hovered,
      'twelve wide column': true
    })

    return (
      <div key={data.id}
        className={data.get('importance') !== 0 ? 'ui divided grid tertiary inverted red segment journal-entry' : 'ui divided grid segment journal-entry' }
        onMouseEnter={() => {this.setState({ hovered: true })}}
        onMouseLeave={() => {this.setState({ hovered: false })}}
      >
        <div className="two wide column journal-mornnoon">
          {this.printSun(data.get('creationDate'))}
        </div>

        <div className="two wide column" style={{ textAlign: 'left' }}>
          <div className="date" >{ _.capitalize(moment(creationDate).format('ddd D.M')) }</div>
        </div>

        <div className={bodyClass}>
          <p>
            {data.get('body')}
          </p>
        </div>

        {this.state.hovered ? this._renderButtons() : ''}
        {/* {this.state.hovered ? (<button onClick={() => this.props.actions.journal_delete(data.id)} className="ui blue button delete-button">Poista...</button>) : '' } */}

        {/* <button
          ref={`delete_button- + ${data.id}`}
          onClick={() => this.props.actions.journal_delete(data.id)}
          className="ui blue button right floated" >
          Poista
        </button> */}
        {/* <button >X</button> */}
      </div>
    )
  }
}
