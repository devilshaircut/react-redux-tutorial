// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  performToggleNavigationCollapse,
  performRequestNavigationContent,
} from './actions/navigationActions'

import './navigation.css'


// --------------------------------------------------
// Component declaration goes here:
// --------------------------------------------------

class Navigation extends Component {

  componentWillMount() {
    this.props.performRequestNavigationContent();
  }

  render() {

    const returnSegmentHeaders = (navigationJSON) => {
      let navigationHeaders = []
      for (const navigationHeader in navigationJSON) {
        navigationHeaders.push(navigationHeader);
      }
      return navigationHeaders
    }

    const returnSegmentItemsHTML = (navigationJSON, segment) => {
      let segmentItemsHTML = []
      let memo = 0;
      for (const segmentItem in navigationJSON[segment]) {
        segmentItemsHTML.push(
          <li key={segmentItem.toString() + "_" + memo}>
            <span className="ns-navigation-segment-item">
              <span className="ss-icon">{navigationJSON[segment][segmentItem].icon}</span>
              <span className="ns-navigation-label">{segmentItem}</span>
              <span className="ns-badge">{navigationJSON[segment][segmentItem].alerts}</span>
            </span>
          </li>
        )
        memo++
      }
      return segmentItemsHTML
    }

    const returnNavigationHTML = (navigationJSON) => {
      if (navigationJSON !== null) {
        let navigationHTML = []
        let navigationHeaders = returnSegmentHeaders(navigationJSON)
        for (let i=0; i < navigationHeaders.length; i++) {
          let navigationHeader = navigationHeaders[i]
          navigationHTML.push(
            <h4 key={navigationHeader.toString() + "_header_" + i} className="ns-navigation-header"><span>{navigationHeaders[i]}</span></h4>
          )
          let segmentItemsHTML = returnSegmentItemsHTML(navigationJSON, navigationHeader)
          navigationHTML.push(
            <ol key={navigationHeader.toString() + "_segment_" + i} className="ns-navigation-segment">{segmentItemsHTML}</ol>
          )
        }
        return navigationHTML
      }
      else {
        return <div>Loading ...</div>
      }
    }

    return(
      <nav id="ns-navigation" className={this.props.collapsed ? 'ns-navigation-collapsed' : ''}>
        <div id="ns-navigation-top-bar" onClick={this.props.performToggleNavigationCollapse}>
          <div id="ns-hamburger-icon"></div>
        </div>
        <div id="ns-navigation-segments">
          {returnNavigationHTML(this.props.content)}
        </div>
        <div id="ns-navigation-submenu">
          <h5>Submenu</h5>
          <ol>
            <li>Back To Main Menu</li>
          </ol>
        </div>
      </nav>
    )

  }

}


// --------------------------------------------------
// Redux mapping goes here:
// --------------------------------------------------

const mapStateToProps = state => ({
  collapsed: state.navigation.collapsed,
  isFetching: state.navigation.isFetching,
  error: state.navigation.error,
  content: state.navigation.content,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  performToggleNavigationCollapse,
  performRequestNavigationContent,
}, dispatch);


// --------------------------------------------------
// Module exports go here:
// --------------------------------------------------

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);




