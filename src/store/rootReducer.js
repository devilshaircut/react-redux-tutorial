// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


// --------------------------------------------------
// Combine reducers here:
// --------------------------------------------------

const combineReducers({
  router: routerReducer,
  navigation: navigationReducer,
  counter
})

// --------------------------------------------------
// Module exports go here:
// --------------------------------------------------

export default combineReducers