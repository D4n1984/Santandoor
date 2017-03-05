var Marionette = require('backbone.marionette');
var tpl = require('underscore-template-loader');

var View = Marionette.ItemView.extend({

	template: require('./templates/main.html'),
	tagName: 'section',
	id: 'content-home',
	className: 'row-fluid',
	onShow: function() {
		$('.wrapper').attr('id', 'details');
		$('.carousel').carousel();

	}

});

module.exports = View;
