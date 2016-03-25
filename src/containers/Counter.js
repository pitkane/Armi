import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CounterActions from '../actions/CounterActions'

class Counter extends Component {
  constructor(props, context) {
    super(props, context)
  }

  handleIncrement() {
    this.props.actions.axiosTest()
  }

  handleDecrement() {
    this.props.actions.decrement()
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter-num-label">{this.props.counter}</div>
        <br />
        <div className="counter-buttons">
          <button onClick={() => {this.handleDecrement();}}>-</button>
          <button onClick={() => {this.handleIncrement();}}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
