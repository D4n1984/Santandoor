var Marionette = require('backbone.marionette');
var Buildings = require('models/building');

var Controller = Marionette.Object.extend({

	show: function(idBuilding) {

		var View = require('./view');
		var reqBuilding = Buildings.getDetailBuilding(idBuilding);
		reqBuilding.then(function(dataBuilding){
			console.log(dataBuilding);
			var view = new View();
			app.mainLayout.content.show(view);
		});

	}

});

module.exports = new Controller;
