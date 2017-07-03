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
        - Create the action constants, action constructor, and the action function.
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
- **Segment 5.1 (Tutorial): Rendering HTML with JSX:**



