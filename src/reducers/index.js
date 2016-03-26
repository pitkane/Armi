import { combineReducers } from 'redux';

// Reducers
import home from './home'
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  home: home,
  routing: routeReducer
});

export default rootReducer;
