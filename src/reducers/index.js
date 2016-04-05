import { combineReducers } from 'redux';

// Reducers
import home from './home'
import bloodsugar from './bloodsugar'
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  home: home,
  bloodsugar: bloodsugar,
  routing: routeReducer
});

export default rootReducer;
