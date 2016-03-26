
import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui large text loader">Loading</div>
      </div>
    );
  }
}
