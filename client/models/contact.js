// External Dependencies
// import * as Backbone from "backbone";
// import * as Bootstrap from "bootstrap";
// import * as JQuery from "jquery";
// import * as Underscore from "underscore";

ContactManager.Models.Contact = Backbone.Model.extend({
    defaults: {
        name: null,
        tel: null,
        email: null,
        avatar: null
    },

    initialize: function() {
        this.set('avatar', _.random(1, 15) + '.jpg');
    }
});
