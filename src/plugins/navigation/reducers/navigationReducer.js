// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import {
  TOGGLE_NAVIGATION_COLLAPSE,
  REQUEST_NAVIGATION_CONTENT_ACTION,
  REQUEST_NAVIGATION_CONTENT_SUCCESS,
  REQUEST_NAVIGATION_CONTENT_FAILURE,
} from '../actions/navigationActions'


// --------------------------------------------------
// Reducer initial state goes here:
// --------------------------------------------------

const initialState = {
  collapsed: true,
  isFetching: false,
  error: null,
  content: null,
}


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
    case REQUEST_NAVIGATION_CONTENT_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null,
      }
    case REQUEST_NAVIGATION_CONTENT_SUCCESS:
      return {
        ...reduxState,
        content: action.payload.data,
        isFetching: false,
        error: null,
      }
    case REQUEST_NAVIGATION_CONTENT_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: action.payload.error,
      }
    default: 
      return reduxState;
  }
}

