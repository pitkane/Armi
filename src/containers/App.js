import React, { Component } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Parse from 'parse'

import { parseID, parseJS } from '../../config.js'

export default class App extends Component {
  componentWillMount() {
    Parse.initialize(parseID, parseJS);
    console.log('Parse initialized')
  }

  render() {
    return (
      <div className="main-app-container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App
