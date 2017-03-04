



var modelBuilding = {
  getBuildings: function() {

  },

  getDetailBuilding: function(idBuilding) {
    var Building = app.ModelsPrototype.extend({
      urlRoot: app.CONSTANTES.URL + '/buildings'
    });

    var building = new Building({id:idBuilding});
    return building.fetch();
  },

  getBuildingByEstimote: function(mayorEstimote) {

  }

};


module.exports =  modelBuilding;
