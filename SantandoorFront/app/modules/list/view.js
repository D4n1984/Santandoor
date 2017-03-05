var Marionette = require('backbone.marionette');
var tpl = require('underscore-template-loader');

var View = Marionette.ItemView.extend({

	template: require('./templates/main.html'),
	tagName: 'section',
	id: 'content-list',
	onShow: function() {
		$('.wrapper').attr('id', 'list');
	}

});

module.exports = View;