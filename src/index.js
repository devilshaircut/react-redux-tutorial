// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'


// --------------------------------------------------
// Initial React render() goes here:
// --------------------------------------------------

const target = document.querySelector('#root')

render(
  <App />,
  target
)
