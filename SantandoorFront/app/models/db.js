/**
 * Created by vlaraort on 20/02/2017.
 */
var PouchDB = require('pouchdb');
//var db = new PouchDB('my_database');

module.exports =  {
    db: new PouchDB('my_database'),

    createDB : function () {
        console.log("A");
    }
    // initializeBBDD: function() {
    //
    //     if(this.existBaseInLocal()){
    //         this.openSavedBBDD();
    //     } else {
    //         this.loadDataBaseFromServer();
    //     }
    //
    // },
    //
    // openSavedBBDD: function (){
    //
    //     this.db = new PouchDB("data");
    //     this.db.allDocs({
    //         include_docs: true,
    //         attachments: true
    //     }).then(function (result) {
    //         console.log("Base de datos V3 recargada");
    //         OPV.trigger("database:ready");
    //     }).catch(function (err) {
    //         console.log(err);
    //     });
    //
    // },
    //
    // createNewBBDD: function(data){
    //
    //     this.db = new PouchDB("data");
    //     this.db.bulkDocs(data).then(function (response) {
    //         OPV.session.dateVersionsDefaultValues = moment().format('L');
    //         OPV.saveSessionInLocalStorage();
    //         OPV.trigger("database:ready");
    //         console.log("Base de datos V3 creada");
    //     }).catch(function (err) {
    //         console.log(err);
    //     });
    //
    // },


};
