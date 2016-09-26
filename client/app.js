// Import Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Routing
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes/route.jsx';

// Import jQuery and Bootstrap
global.$ = require('jquery');
global.jQuery = require('jquery');
var bootstrap = require('bootstrap');

// Import Views
import App from './views/app-view.jsx';
import ContactList from "./views/list-view.jsx" // For Contact List page
import ContactForm from "./views/form-view.jsx" // For Add/Edit page

// Import Data Model
var contact = require("./models/contact"); // Data structure to store contact information

// Import CSS
require("bootstrap/dist/css/bootstrap.css");
require("./styles/main.css");

// Routings
render(<Router routes={routes} history={browserHistory} />, document.getElementById('main'));
