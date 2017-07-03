// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../home'


// --------------------------------------------------
// Component declaration goes here:
// --------------------------------------------------

const App = () => {
  return(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route exact path='/' component={Home}/>
      </ConnectedRouter>
    </Provider>
  )
}


// --------------------------------------------------
// Module exports go here:
// --------------------------------------------------

export default App

