// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import navigationReducer from '../plugins/navigation/reducers/navigationReducer';


// --------------------------------------------------
// Combine reducers here and export:
// --------------------------------------------------

export default combineReducers({
  router: routerReducer,
  navigation: navigationReducer,
})

