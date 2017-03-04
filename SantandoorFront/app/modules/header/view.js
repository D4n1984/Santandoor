var Marionette = require('backbone.marionette');
var tpl = require('underscore-template-loader');

var View = Marionette.ItemView.extend({

	template: require('./templates/main.html'),
	tagName: 'section',
	id: 'content-header',
	events: {
		'click .button': function(e) {
			e.preventDefault();
			$('#main-region').toggleClass('isOpen');
		},
		'click #main-region-locker': function(e) {
			e.preventDefault();
			$('#main-region').removeClass('isOpen');
		}	
	}

});

module.exports = View;