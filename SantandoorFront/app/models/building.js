



var modelBuilding = {
  getBuildings: function() {

  },

  getDetailBuilding: function(idBuilding) {
    var Building = app.ModelsPrototype.extend({
      urlRoot: app.CONSTANTES.URL + '/building'
    });

    var building = new Building({id:idBuilding});
    return building.fetch();
  },

  getBuildingByEstimote: function(uuid, mayorEstimote) {
    var Building = app.ModelsPrototype.extend({
      url: app.CONSTANTES.URL + '/estimote/'+uuid
    });

    var building = new Building();
    return building.fetch({
      data: {
        major: mayorEstimote
      }
    });
  }

};


module.exports =  modelBuilding;
