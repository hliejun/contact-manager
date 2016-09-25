// Import Modules
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var Underscore = require('underscore');

// Import Bootstrap
global.jQuery = require('jquery');
var Bootstrap = require('bootstrap');

// Import JS
// import * as Router from "./router";
// import * as Contacts from "views/contacts";
// import * as ContactForm from "views/contactForm";
// import * as Contact from "views/contact";
// import * as Contacts from "collections/contacts";
// import * as Contact from "models/contact";

// Import CSS
require("bootstrap/dist/css/bootstrap.css");
require("./styles/main.css");

ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('main')
      );

// document.write("It works.");

// window.ContactManager = {
//
//     // MVC Attributes
//     Models: {},
//     Collections: {},
//     Views: {},
//
//     // Init Function
//     start: function(data) {
//
//         var contacts = new ContactManager.Collections.Contacts(data.contacts),
//             router = new ContactManager.Router();
//
//         router.on('route:home', function() {
//             router.navigate('contacts', {
//                 trigger: true,
//                 replace: true
//             });
//         });
//
//         // Display contacts in main container
//         router.on('route:showContacts', function() {
//             var contactsView = new ContactManager.Views.Contacts({
//                 collection: contacts
//             });
//
//             $('.main-container').html(contactsView.render().$el);
//         });
//
//         // Adding contacts to contact list on submit (non-persistent)
//         router.on('route:newContact', function() {
//             var newContactForm = new ContactManager.Views.ContactForm({
//                 model: new ContactManager.Models.Contact()
//             });
//
//             newContactForm.on('form:submitted', function(attrs) {
//                 attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
//                 contacts.add(attrs);
//                 router.navigate('contacts', true);
//             });
//
//             $('.main-container').html(newContactForm.render().$el);
//         });
//
//         // Editing a contact
//         router.on('route:editContact', function(id) {
//             var contact = contacts.get(id),
//                 editContactForm;
//
//             if (contact) {
//                 editContactForm = new ContactManager.Views.ContactForm({
//                     model: contact
//                 });
//
//                 editContactForm.on('form:submitted', function(attrs) {
//                     contact.set(attrs);
//                     router.navigate('contacts', true);
//                 });
//
//                 $('.main-container').html(editContactForm.render().$el);
//             } else {
//                 router.navigate('contacts', true);
//             }
//         });
//
//         Backbone.history.start();
//     }
// };

// <!-- Header Banner -->
//
//
// <!-- Main Container -->
//
//
// <!-- Create Button Layout -->
//
//
// <!-- List Thumbnail Layout -->
//
//
// <!-- Create/Edit Form Layout -->
//
//
// <!-- Internal Dependencies -->
// <!-- <script src="bundle.js"></script>
// <script src="app.js"></script>
// <script src="models/contact.js"></script>
// <script src="collections/contacts.js"></script>
// <script src="views/contact.js"></script>
// <script src="views/contacts.js"></script>
// <script src="views/contactForm.js"></script>
// <script src="router.js"></script>
//
//
// <!-- Init Data -->
