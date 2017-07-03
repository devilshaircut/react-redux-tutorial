// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------


// --------------------------------------------------
// Action constants go here:
// --------------------------------------------------

export const TOGGLE_NAVIGATION_COLLAPSE = 'TOGGLE_NAVIGATION_COLLAPSE';


// --------------------------------------------------
// Action creator constructors go here:
// --------------------------------------------------

const toggleNavigationCollapse = () => (
  {
    type: 'TOGGLE_NAVIGATION_COLLAPSE',
  }
);


// --------------------------------------------------
// Action creator functions go here:
// --------------------------------------------------

export const performToggleNavigationCollapse = () => {
  return dispatch => {
    dispatch(toggleNavigationCollapse());
  }
};

