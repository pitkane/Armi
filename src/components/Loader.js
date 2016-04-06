
import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      // <div className="ui active inverted dimmer">
      //   <div className="ui large text loader">Loading</div>
      // </div>
      <div className="ui vertical segment">
        <br/><br/>
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Lataa...</div>
        </div>
        <p></p>
        <br/><br/>
      </div>
    );
  }
}
