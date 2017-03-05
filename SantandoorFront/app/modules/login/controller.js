var Marionette = require('backbone.marionette');

var Controller = Marionette.Object.extend({

	show: function() {

		var View = require('./view');
		var view = new View();
		app.mainLayout.content.show(view);

	}

});

module.exports = new Controller;