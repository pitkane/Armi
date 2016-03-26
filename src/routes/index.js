import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import App from '../containers/App';
import NotFoundView from '../components/NotFoundView'
import Home from '../containers/Home'
import About from '../components/About'

export default function () {
  return (
    <Router history={browserHistory}>
      {/* 'App' acts as a wrapper for the child components */}
      <Route path="/" component={App}>
        {/* IndexRoute is the initial component that is loaded,
          other routes are loaded according to the component
        property specified here */}
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="*" component={NotFoundView} />
      </Route>
    </Router>
  );
}
