// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import { get } from '../../../plugins/axios/apiUtilities';


// --------------------------------------------------
// Action constants go here:
// --------------------------------------------------

export const TOGGLE_NAVIGATION_COLLAPSE = 'TOGGLE_NAVIGATION_COLLAPSE'

export const REQUEST_NAVIGATION_CONTENT_ACTION = 'REQUEST_NAVIGATION_CONTENT_ACTION';
export const REQUEST_NAVIGATION_CONTENT_SUCCESS = 'REQUEST_NAVIGATION_CONTENT_SUCCESS';
export const REQUEST_NAVIGATION_CONTENT_FAILURE = 'REQUEST_NAVIGATION_CONTENT_FAILURE';


// --------------------------------------------------
// Action creator constructors go here:
// --------------------------------------------------

const toggleNavigationCollapse = () => (
  {
    type: 'TOGGLE_NAVIGATION_COLLAPSE',
  }
)

const requestNavigationContentAction = () => (
  {
    type: 'REQUEST_NAVIGATION_CONTENT_ACTION',
  }
);
const requestNavigationContentSuccess = (data) => (
  {
    type: 'REQUEST_NAVIGATION_CONTENT_SUCCESS',
    payload: {
      data,
    },
  }
);
const requestNavigationContentFailure = (error) => (
  {
    type: 'REQUEST_NAVIGATION_CONTENT_FAILURE',
    payload: {
      error,
    },
  }
);


// --------------------------------------------------
// Action creator functions go here:
// --------------------------------------------------

export const performToggleNavigationCollapse = () => {
  return dispatch => {
    dispatch(toggleNavigationCollapse())
  }
}

export const performRequestNavigationContent = () => {
  return dispatch => {
    dispatch(requestNavigationContentAction());
    let baseURL = window.location.protocol + '//' + window.location.host;
    get(baseURL + '/navigationContent.json')
      .then(
        (data) => {
          dispatch(requestNavigationContentSuccess(data));
        }
      )
      .catch(
        (error) => {
          dispatch(requestNavigationContentFailure(error));
        }
      );
  }
};

