// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'


// --------------------------------------------------
// Initial React render() goes here:
// --------------------------------------------------

const target = document.querySelector('#root')

render(
  <App />,
  target
)
