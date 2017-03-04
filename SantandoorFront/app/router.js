var Marionette = require('backbone.marionette');
  
var Router = Marionette.AppRouter.extend({

	appRoutes: {

		'preload' : 'preload',
		'home' : 'home',
		'list' : 'list',
		'details/:id' : 'details'

	}

});

module.exports = Router;