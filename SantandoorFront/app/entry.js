var jquery = window.$ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var estimoteLib = require('tools/estimote.js');
var css = require('./css/main.css');

var BackboneAsync = require("backbone.async");
var myConst = require('const.js');

estimoteLib.startMonitoringBeacons();

const initialize = function() {
  	return Promise.resolve();
};

const app = new Marionette.Application();
app.ModelsPrototype = BackboneAsync.Model;
app.CONSTANTES = myConst;
app.on('start', () => {

	Backbone.emulateHTTP = true;

	app.mainLayout = new Backbone.Marionette.LayoutView({

	    el: '.wrapper',

	    regions: {
	        content: "#content-region",
	        header: "#header-region",
	        panel: '#panel-region'
	    },

	    template: require('./templates/layout.html'),

	});

	app.mainLayout.render();

	var Router = require('./router.js');

	Backbone.history.start();

	app.navigate = new Router({
		controller: API
	}).navigate;

	//events

	app.on('home', function() {
		app.navigate('home', {trigger: true});
	});

	app.on('list', function() {
		app.navigate('list', {trigger: true});
	});

	app.on('details', function(id) {
		app.navigate('details/' + id, {trigger: true});
	});

	app.navigate('preload', {trigger: true});

});

initialize().then(() => app.start());

var API = {

	preload: function() {
		var Header = require('./modules/header/controller.js');
		Header.show();
		var Panel = require('./modules/panel/controller.js');
		Panel.show();
		app.navigate('home', {trigger: true});
	},

	home: function() {
		$('#preload-region').fadeIn(function() {
			var Controller = require('./modules/home/controller.js');
			Controller.show();
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	},

	list: function() {
		$('#preload-region').fadeIn(function() {
			var Controller = require('./modules/list/controller.js');
			Controller.show();
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	},

	details: function(id) {
		$('#preload-region').fadeIn(function() {
			var Controller = require('./modules/details/controller.js');
			Controller.show(id);
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	}

};

$(window).resize(function() {
	//utils.resize();
});

window.app = app;
