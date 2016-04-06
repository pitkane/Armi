import React, { Component } from 'react'
import classNames from 'classnames'

export default class Button extends Component {

  constructor(props) {
    super(props)
    this.state = { isHovered: false }
  }

  render() {
    const btnClass = classNames(this.props.className, {
      'ui blue button': true
    });
    return (
      <button onMouseOver={() => {}}
        onMouseOut={() => {}}
        className={btnClass}>
        {this.props.label}
      </button>
    )
  }
}
