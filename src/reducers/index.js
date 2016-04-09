import { combineReducers } from 'redux';

// Reducers
import bloodsugar from './bloodsugar'
import notes from './notes'
import journal from './journal'
import forms from './forms'
import bloodpressure from './bloodpressure'
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  journal: journal,
  bloodsugar: bloodsugar,
  bloodpressure: bloodpressure,
  notes: notes,
  forms: forms,
  routing: routeReducer
});

export default rootReducer;
