import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import * as HomeActions from '../actions/HomeActions'
import * as JournalActions from '../actions/JournalActions'
import * as BloodSugarActions from '../actions/BloodSugarActions'
import * as BloodPressureActions from '../actions/BloodPressureActions'
import * as NotesActions from '../actions/NotesActions'
import * as FormsActions from '../actions/FormsActions'

import Loader from '../components/Loader'

import Journal from '../components/Journal'
import BloodSugar from '../components/BloodSugar'
import Notes from '../components/Notes'
import LiveTime from '../components/LiveTime'
import BloodPressure from '../components/BloodPressure'

import Forms from '../components/Forms'

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
        <div className="ui grid">

          <div className="eight wide column leftside">

            <div className="tile journal-tile teal">
              

              <Forms
                state={this.props.forms}
                forms_actions={this.props.forms_actions}
                journal_actions={this.props.journal_actions}
                notes_actions={this.props.notes_actions}
                bloodsugar_actions={this.props.bloodsugar_actions}
                bloodpressure_actions={this.props.bloodpressure_actions}
              />

              <Journal
                data={this.props.journal.data}
                dispatch={this.props.dispatch}
                actions={this.props.journal_actions}
                isLoading={this.props.journal.isLoading}
              />
            </div>

          </div>

          <div className="eight wide column rightside">

            <div className="tile livetime-tile purple">
              <LiveTime />
            </div>

            <div className="ui grid">

              <div className="eight wide column" style={{ paddingRight: 0 }}>
                <div className="tile bloodpressure-tile red">

                  <BloodPressure
                    dispatch={this.props.dispatch}
                    actions={this.props.bloodpressure_actions}
                    data={this.props.bloodpressure.data}
                    isLoading={this.props.bloodpressure.isLoading}
                  />

                </div>
              </div>

              <div className="eight wide column" style={{ paddingLeft: 0 }}>
                <div className="tile bloodsugar-tile orange">
                  <BloodSugar
                    data={this.props.bloodsugar.data}
                    dispatch={this.props.dispatch}
                    actions={this.props.bloodsugar_actions}
                    isLoading={this.props.bloodsugar.isLoading}
                  />
                </div>
              </div>

            </div>

            <div className="tile notes-tile yellow">
              <Notes
                data={this.props.notes.data}
                dispatch={this.props.dispatch}
                actions={this.props.notes_actions}
                isLoading={this.props.notes.isLoading}
              />
            </div>

          </div>
        </div>

      </div>
    )
    return renderHome
  }
}

function mapStateToProps(state) {
  return {
    journal: state.journal,
    bloodsugar: state.bloodsugar,
    bloodpressure: state.bloodpressure,
    notes: state.notes,
    forms: state.forms
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    journal_actions: bindActionCreators(JournalActions, dispatch),
    bloodsugar_actions: bindActionCreators(BloodSugarActions, dispatch),
    bloodpressure_actions: bindActionCreators(BloodPressureActions, dispatch),
    notes_actions: bindActionCreators(NotesActions, dispatch),
    forms_actions: bindActionCreators(FormsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
