var Marionette = require('backbone.marionette');
var tpl = require('underscore-template-loader');

var View = Marionette.ItemView.extend({

	template: require('./templates/main.html'),
	tagName: 'section',
	id: 'content-home',

	className: 'table-cell',

	onShow: function() {
		$('.wrapper').attr('id', 'home');
		app.vent.on("estimote:didStartMonitoringForRegion",function() {
			$(this.el).append('didStartMonitoringForRegion <br/>');
		});
		app.vent.on("estimote:recieve:beacon",function(regionData) {
			$(this.el).append('estimote:recieve:beacon <br/>');
		});
		  app.vent.on('estimote:exit:region', function(regionData) {
				$(this.el).append('exit region '+regionData.major+' <br/>');
			}, this);
			app.vent.on('estimote:enter:region', function(regionData) {
			 $(this.el).append('enter region '+regionData.major+'<br/>');
		 }, this);
	}

});

module.exports = View;
