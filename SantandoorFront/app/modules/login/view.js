var Marionette = require('backbone.marionette');
var tpl = require('underscore-template-loader');

var View = Marionette.ItemView.extend({

	template: require('./templates/main.html'),
	tagName: 'section',
	id: 'content-login',
	className: 'table-cell',
	onShow: function() {
		$('.wrapper').attr('id', 'login');
	}

});

module.exports = View;