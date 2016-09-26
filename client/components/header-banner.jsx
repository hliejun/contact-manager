// Import Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Import CSS
require("bootstrap/dist/css/bootstrap.css");
require("../styles/main.css");

//
export default class HeaderBanner extends Component {
  render() {
    return (
        <header className="bs-header">
          <div className="container">
              <h1>Contact Manager</h1>
              <p>Simple React example application</p>
          </div>
      </header>
    );
  }
}
