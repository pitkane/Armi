import React, { Component } from 'react'
// import Parse from 'parse'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as HomeActions from '../actions/HomeActions'
import _ from 'lodash'
import Loader from '../components/Loader'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // componentDidMount
  }
  componentWillReceiveProps(nextProps) {
    // componentWillReceiveProps
  }
  reloadData() {
    this.props.actions.posts_get()
  }
  addPost(event) {
    event.preventDefault()

    this.props.actions.posts_add(event.target.body.value, event.target.username.value)
      .then((success) => {
        console.log(success)
        // clear form, dispatch notification, reload data
        console.log('Successfully added new post, clear stuff ;)')
      // console.log('Adding done!');
      }, (error) => {
        console.log('Something went wrong, dont clear')
      })
  }
  render() {
    let renderAbout = ''
    const { posts_data, isLoading } = this.props.home

    if (isLoading) renderAbout = <Loader />
    else {
      renderAbout = (
        <div className="view-container">
          <form onSubmit={(event) => this.addPost(event)}>
            <textarea name="body" ></textarea>
            <input type="text" name="username" />
            <input type="submit" value="Post" />
          </form>
          <button onClick={() => this.reloadData()}>Reload data</button>
          {_.isEmpty(posts_data) ? (<p>Empty set </p>) : ''}
          <ul>
            { posts_data.map(data => {
              return <li key={data.get('objectId')}>{data.get('body')}</li>
            })}
          </ul>
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
    dispatch: dispatch,
    actions: bindActionCreators(HomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
