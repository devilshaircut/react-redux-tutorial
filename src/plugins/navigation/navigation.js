// --------------------------------------------------
// Module imports go here:
// --------------------------------------------------

import React from 'react'

import './navigation.css'


// --------------------------------------------------
// Component declaration goes here:
// --------------------------------------------------

const Navigation = () => {
  return(
    <nav id="ns-navigation">
      <div id="ns-navigation-top-bar">
        <div id="ns-hamburger-icon"></div>
      </div>
      <div id="ns-navigation-segments">
        <h4 className="ns-navigation-header"><span>Segment Header One</span></h4>
        <ol className="ns-navigation-segment">
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Layers</span> <span className="ns-navigation-label">Navigation Item 1</span> <span className="ns-badge">47</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Rows</span> <span className="ns-navigation-label">Navigation Item 2</span> <span className="ns-badge">38</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Grid</span> <span className="ns-navigation-label">Navigation Item 3</span> <span className="ns-badge">73</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Compose</span> <span className="ns-navigation-label">Navigation Item 4</span> <span className="ns-badge">61</span></span></li>
        </ol>
        <h4 className="ns-navigation-header"><span>Segment Header Two</span></h4>
        <ol className="ns-navigation-segment">
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Picture</span> <span className="ns-navigation-label">Navigation Item 5</span> <span className="ns-badge">30</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Sample</span> <span className="ns-navigation-label">Navigation Item 6</span> <span className="ns-badge">88</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Font</span> <span className="ns-navigation-label">Navigation Item 7</span> <span className="ns-badge">67</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">User</span> <span className="ns-navigation-label">Navigation Item 8</span> <span className="ns-badge">12</span></span></li>
        </ol>
        <h4 className="ns-navigation-header"><span>Segment Header Three</span></h4>
        <ol className="ns-navigation-segment">
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Layers</span> <span className="ns-navigation-label">Navigation Item 9</span> <span className="ns-badge">47</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Rows</span> <span className="ns-navigation-label">Navigation Item 10</span> <span className="ns-badge">38</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Grid</span> <span className="ns-navigation-label">Navigation Item 11</span> <span className="ns-badge">73</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Compose</span> <span className="ns-navigation-label">Navigation Item 12</span> <span className="ns-badge">61</span></span></li>
        </ol>
        <h4 className="ns-navigation-header"><span>Segment Header Four</span></h4>
        <ol className="ns-navigation-segment">
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Picture</span> <span className="ns-navigation-label">Navigation Item 13</span> <span className="ns-badge">30</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Sample</span> <span className="ns-navigation-label">Navigation Item 14</span> <span className="ns-badge">88</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Font</span> <span className="ns-navigation-label">Navigation Item 15</span> <span className="ns-badge">67</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">User</span> <span className="ns-navigation-label">Navigation Item 16</span> <span className="ns-badge">12</span></span></li>
        </ol>
        <h4 className="ns-navigation-header"><span>Segment Header Five</span></h4>
        <ol className="ns-navigation-segment">
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Picture</span> <span className="ns-navigation-label">Navigation Item 17</span> <span className="ns-badge">30</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Sample</span> <span className="ns-navigation-label">Navigation Item 18</span> <span className="ns-badge">88</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">Font</span> <span className="ns-navigation-label">Navigation Item 19</span> <span className="ns-badge">67</span></span></li>
          <li><span className="ns-navigation-segment-item"><span className="ss-icon">User</span> <span className="ns-navigation-label">Navigation Item 20</span> <span className="ns-badge">12</span></span></li>
        </ol>
      </div>
      <div id="ns-navigation-submenu">
        <h5> </h5>
        <ol>
          <li>Back To Main Menu</li>
        </ol>
      </div>
    </nav>
  )
}

// --------------------------------------------------
// Module exports go here:
// --------------------------------------------------

export default Navigation




