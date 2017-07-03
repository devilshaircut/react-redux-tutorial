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
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}


// --------------------------------------------------
// Module exports go here:
// --------------------------------------------------

export default App

