// Import Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Routing
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes/route';

// Import jQuery and Bootstrap
global.$ = require('jquery');
var bootstrap = ('bootstrap');

// Import Views
import App from './views/app-view';
import ContactList from "./views/list-view" // For Contact List page
import ContactForm from "./views/form-view" // For Add/Edit page

// Import Data Model
var contact = require("./models/contact"); // Data structure to store contact information

// Import CSS
require("bootstrap/dist/css/bootstrap.css");
require("./styles/main.css");

// Routing in a single-page application
render(<Router routes={routes} history={browserHistory} />, document.getElementById('main'));
