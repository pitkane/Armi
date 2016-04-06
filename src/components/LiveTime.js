import React, { Component } from 'react'
import moment from 'moment'
import _ from 'lodash'

class LiveTime extends Component {

  constructor() {
    super()
    moment.locale('fi');
    this.setTime = this.setTime.bind(this);
  }

  componentWillMount() {
    const intervalId = window.setInterval(this.setTime, 1000);
    this.setState({ intervalId: intervalId })
    this.setTime()
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  setTime() {
    const timeNow = moment().format('HH:mm:ss')
    this.setState({ timeNow })
  }

  render() {
    return (
      <div className="livetime-main">
        <div className="time">{ this.state.timeNow }</div>
        <div className="date">{ _.capitalize(moment().format('dddd, Do MMMM YYYY')) }</div>
      </div>
    )
  }
}


export default LiveTime
