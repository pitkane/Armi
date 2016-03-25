import React, { Component } from 'react'
import Parse from 'parse'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AboutActions from '../actions/AboutActions'
import _ from 'lodash'

class About extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.fetchem()
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {

    console.log(_.isEmpty(this.props.about))
    if (_.isEmpty(this.props.about)) {
      return (<div>Loading...</div>)
    } else {
      return (
        <div className="view-container">
          <div>What about it?</div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    about: state.about
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AboutActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
