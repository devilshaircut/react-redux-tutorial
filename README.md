# react-redux-tutorial

This codebase will teach you how to integrate react-router and Redux. It uses create-react-app as a starting point.

- Make sure you have Node Version Manager (NVM) installed.
- Make sure you have Node installed using NVM.
- Make sure you have Git installed.
- Make sure you have GitHub configured (preferably for CLI use).
- Using Terminal, navigate to your projects folder.
- Then type: `git clone https://github.com/devilshaircut/react-redux-tutorial.git`.
- Then type: `nvm install`.
- Then type: `yarn start`.


# Steps:

- **Segment 1.0: Your First View:**
    - Identify entry point into the React app.
    - Render react in index.js.
    - Create first React component, "App".
        - This component is the parent component of all other components.
            - Note that, as written, this component is a pure function (rather than declared as a React component class).
        - It will also contain the router.
- **Segment 2.0: Using React Router to Create Your Second View:**
    - Create second React component, "Home".
        - This component is the home view.
        - Configure routing. Link the Home component into the App component's router.
- **Segment 3.0: Integrating Redux for Tracking History:**
    - Create the Redux store.
    - Combine all reducers to create the root reducer.
    - Add in the Redux Provider component.
    - Add in the react-router-redux ConnectedRouter component.
    - Verify Redux is tracking browsing history as state using Redux dev tools.
- **Segment 4.0 (Tutorial): A Navigation Component - Setup:**
    - Create a third React component, "Tutorial".
    - Configure routing. Link the Tutorial component into the App component's router.
    - Use the reference HTML in /react-redux-tutorial/src/containers/reference/index.js to emit HTML.
- **Segment 4.1 (Tutorial): A Navigation Component - Redux:**
    - Create a basic action for toggling the collapse state of the navigation.
        - (The state will just be a property on navigation state that is a boolean.)
        - (This boolean state will be used to tell the component render with or without the CSS class that determines collapsed/not-collapsed presentation.)
        - Create the action constants, action constructor, and the action function/callback.
    - Create the reducer and handle the case of your basic action.
        - Enumerate the component's initial state.
        - Write the reducer.
            - Handle the toggle action case.
            - Handle the default case.
    - Add your reducer to the root reducer.
    - Connect your action to your component.
        - Import necessary methods (connect and bindActionCreators, respectively) from redux and react-redux.
        - Import action.
        - Map state (Redux state) to component props.
        - Map actions to component props (dispatch).
        - Connect state and dispatch to Redux.
            - (This creates a higher order component - it sort of 'decorates' your base component with the powers of Redux, so your component can concern itself solely (ideally) with formatting HTML.)
        - Add in the condition that looks at collapse state and decides whether or not to add on the CSS class for collapsed/not-collapsed state.
        - Add in the event handler.
- **Segment 5.0 (Tutorial): AJAX and Using AJAX in Redux:**
    - Import our RESTful action from Axios.
    - In our navigation reducer, add in additional states for our navigation component. We need to handle various contingencies related to asynchronous web transactions:
        - We would like to know if the component is waiting on a change related to an AJAX call (useful for making something like a throbber).
        - We would like to know if our AJAX call returned an error and what that error is.
        - We would like to know the actual payload the AJAX returned - for use in our component!
    - In our navigation actions, we need to create additional actions related to AJAX. As with typical AJAX patterns, we need to handle:
        - the AJAX request,
        - a success callback,
        - and a failure callback.
    - Create the action constants and action constructor or each of these.
    - Create the action function/callback which performs the AJAX request.
        - We immediately want to notify state that it is waiting on an asynchronous action; dispatch the related action.
        - We then want to actually perform the AJAX call using Axios.
        - Using the Promise pattern (available natively in ES6), perform the AJAX request and handle the success and error cases.
    - Move back to our navigation reducer.
        - Import our new actions.
        - Handle each action inside of the reducer.
    - Inside of our component, we need to actually initate the AJAX request.
        - Import our new action function/callback which performs the AJAX request.
        - Also map this action to props.
        - Map the new states (which we created in our reducer) to props.
        - Inside of our component class, apply our action function/callback when React mounts our component.
    - For the purposes of confirming everything works correctly, you can `console.log()` inside of the reducer; but delete this after you've confirmed it works.
- **Segment 5.1 (Tutorial): Rendering HTML with JSX:**
    - Review the JSON and JSON schema returned by our AJAX GET.
    - Review the current HTML template that the navigation component returns.
    - We want to use the JSON to populate this template so that it becomes a dynamically loaded component rather than a static component.
    - Our task is to transform the JSON into HTML using JS and JSX.
    - This is mostly just a matter of writing vanilla JavaScript, as it is intended to work in React, specifically react components.
    - There are many ways to do this. Here is how I broke the problem down:
        - We see that the navigation has two levels of hierarchy:
            - The parent level contains headers and list wrappers, which repeat for each navigation segment.
            - The child level has list items, which repeat for each list item.
        - First, we loop through the outer segments and build an array that represents the parent level (segment headers and segment items wrappers).
        - For each item in this array, we will look at the child content (the list items) and build this repeating list HTML.
        - We will use a helper function to build each list item.
- **How might we upgrade this component further?**
    - Segment 6.0 (Tutorial): Adding 'current place' indicators.
    - Segment 7.0 (Tutorial): Adding a submenu and other advanced states.
    - Other upgrades not related directly to React:
        - Make it responsive.






