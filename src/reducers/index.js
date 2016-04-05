import { combineReducers } from 'redux';

// Reducers
import bloodsugar from './bloodsugar'
import notes from './notes'
import journal from './journal'
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  journal: journal,
  bloodsugar: bloodsugar,
  notes: notes,
  routing: routeReducer
});

export default rootReducer;
