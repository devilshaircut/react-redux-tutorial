// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


// --------------------------------------------------
// Combine reducers here:
// --------------------------------------------------

export default combineReducers({
  router: routerReducer,
})