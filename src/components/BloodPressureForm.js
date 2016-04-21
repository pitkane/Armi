import React, { Component } from 'react'

import Loader from './Loader'

export default class BloodPressureForm extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  _addBPEntry(event) {
    event.preventDefault()
    const result = this.props.actions.bp_create(
      event.target.diastolic.value,
      event.target.systolic.value
    )
      .then((success) => {
        console.log('Bloodpressure entry added')
        this.props.closeForm()
      }, (error) => {
        console.log('Something went wrong, dont clear', error)
      })
  }

  render() {
    if (this.props.isLoading) return (<Loader />)
    else {
      return (
        <div className="ui grid" style={{ paddingBottom: '20px' }}>
          <div className="ui sixteen wide container">
            <form className="ui form bloodpressure-form" onSubmit={(event) => this._addBPEntry(event)}>
              <div className="fields">
                <div className="eight wide field">
                  <label>Alapaine</label>
                  <input type="text" name="diastolic" />
                </div>
                <div className="eight wide field">
                  <label>Yläpaine</label>
                  <input type="text" name="systolic" />
                </div>
              </div>
              <input type="submit" className="ui primary button right floated" value="Lisää merkintä" />
              <button type="button" className="ui button right floated" onClick={ this.props.closeForm }>Hylkää</button>
            </form>
          </div>
        </div>
      )
    }
  }
}
