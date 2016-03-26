import React, { Component } from 'react'
// import Parse from 'parse'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as HomeActions from '../actions/HomeActions'
import _ from 'lodash'

class Home extends Component {
  constructor(props) {
    super(props)
  }


  // this.props.actions.posts_get()
  // this.props.actions.posts_add(content)
  // this.props.actions.posts_update(post_id, )
  // this.props.actions.posts_remove(post_id)

  // this.props.actions.bs_add(value)
  // this.props.actions.bs_remove(bs_value)

  // this.props.home.posts_data <- something :)

  componentDidMount() {
    this.props.actions.posts_get()
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
  }

  render() {
    let renderAbout = ''

    if (_.isEmpty(this.props.home.posts_data)) {
      renderAbout = <div>Loading posts...</div>
    } else {
      renderAbout = (
        <div className="view-container">
          <div>What about it?</div>
          { this.props.home.posts_data.map(data => {
            console.log(data.get('body'))
          })}
        </div>
      )
    }
    return renderAbout
  }
}

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
