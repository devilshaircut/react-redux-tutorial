// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../home'


// --------------------------------------------------
// Component declaration goes here:
// --------------------------------------------------

const App = () => {
  return(
    <main>
      <Route exact path='/' component={Home}/>
    </main>
  )
}


// --------------------------------------------------
// Module exports go here:
// --------------------------------------------------

export default App

