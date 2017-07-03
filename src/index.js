// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/configureStore'

import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'


// --------------------------------------------------
// Initial React render() goes here:
// --------------------------------------------------

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
)

