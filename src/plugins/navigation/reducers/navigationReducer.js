// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import {
  TOGGLE_NAVIGATION_COLLAPSE,
} from '../actions/navigationActions';


// --------------------------------------------------
// Reducer initial state goes here:
// --------------------------------------------------

const initialState = {
  collapsed: true,
};


// --------------------------------------------------
// Reducer's primary body goes here:
// --------------------------------------------------

export default (reduxState = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_NAVIGATION_COLLAPSE:
      return {
        ...reduxState,
        collapsed: !reduxState.collapsed,
      };
    default: 
      return reduxState;
  }
};

