import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import * as HomeActions from '../actions/HomeActions'
import * as JournalActions from '../actions/JournalActions'
import * as BloodSugarActions from '../actions/BloodSugarActions'
import * as NotesActions from '../actions/NotesActions'

import Loader from '../components/Loader'
import BloodSugar from '../components/BloodSugar'
import Notes from '../components/Notes'
import Journal from '../components/Journal'
import LiveTime from '../components/LiveTime'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    let renderHome = ''

    renderHome = (
      <div className="home-main">
        <Journal
          data={this.props.journal.data}
          actions={this.props.journal_actions}
          isLoading={this.props.journal.isLoading}
        />
        <BloodSugar
          data={this.props.bloodsugar.data}
          actions={this.props.bloodsugar_actions}
          isLoading={this.props.bloodsugar.isLoading}
        />
        <Notes
          data={this.props.notes.data}
          actions={this.props.notes_actions}
          isLoading={this.props.notes.isLoading}
        />
        <LiveTime />
      </div>
    )
    // }
    return renderHome
  }
}

function mapStateToProps(state) {
  return {
    journal: state.journal,
    bloodsugar: state.bloodsugar,
    notes: state.notes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    journal_actions: bindActionCreators(JournalActions, dispatch),
    bloodsugar_actions: bindActionCreators(BloodSugarActions, dispatch),
    notes_actions: bindActionCreators(NotesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
