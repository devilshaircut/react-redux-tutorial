// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './rootReducer'


// --------------------------------------------------
// Configure intial state here:
// --------------------------------------------------

export const history = createHistory()

const initialState = {}

// --------------------------------------------------
// Configure enhancer middleware here:
// --------------------------------------------------

const enhancers = []


// --------------------------------------------------
// Configure middleware here:
// --------------------------------------------------

const middleware = [
  thunk,
  routerMiddleware(history)
]


// --------------------------------------------------
// Apply all middleware here:
// --------------------------------------------------

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)


// --------------------------------------------------
// Create store here:
// --------------------------------------------------

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)


// --------------------------------------------------
// Module exports go here:
// --------------------------------------------------

export default store

