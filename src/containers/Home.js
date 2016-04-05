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
    $('.ui.dropdown').dropdown()
    this.props.actions.posts_get()
  }
  componentWillReceiveProps(nextProps) {
    // componentWillReceiveProps
  }
  clearForm() {
    $('form').trigger('reset');
    console.log('(Home: clearForm) executed')
  }
  reloadData() {
    this.props.actions.posts_get()
    console.log('(Home: reloadData) executed')
  }
  addPost(event) {
    event.preventDefault()
    const self = this
    const actions = this.props

    const result = this.props.actions.posts_add(
      event.target.body.value,
      event.target.username.value,
      event.target.importance.value
    )
      .then((success) => {
        console.log('(Home: addPost) Success')
        self.clearForm()
        self.reloadData()
      }, (error) => {
        console.log('Something went wrong, dont clear', error)
      })
  }

  deletePost(post_id) {
    const actions = this.props
    actions.posts_remove(post_id)
      .then((success) => {
        console.log('(Home: deletePost) Success')
        actions.posts_get()
      }, (error) => {
        console.log('Something went wrong', error)
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

            Tärkeysaste
            <select name="importance" className="ui dropdown">
              <option value="0">Normaali</option>
              <option value="1">Tärkeä</option>
              <option value="2">Kriittinen</option>
            </select>
            <input type="submit" value="Post" />
          </form>
          <button onClick={() => this.reloadData()}>Reload data</button>
          {_.isEmpty(posts_data) ? (<p>Empty set </p>) : ''}
          <ul>
            { posts_data.map(data => {
              const post_id = data.id
              return (
                <li key={post_id}>{data.get('body')}
                  <button onClick={() => this.deletePost(post_id)}>X</button>
                </li>
              )
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
