var Marionette = require('backbone.marionette');
var tpl = require('underscore-template-loader');

var View = Marionette.ItemView.extend({

	template: require('./templates/main.html'),
	tagName: 'section',
	id: 'content-home',
	className: 'table-cell',
	onShow: function() {
		$('.wrapper').attr('id', 'home');
	}

});

module.exports = View;