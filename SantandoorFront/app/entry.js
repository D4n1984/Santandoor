var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var estimoteLib = require('tools/estimote.js');
//DB.createDB();

estimoteLib.startMonitoringBeacons();
var mainLayout = new Backbone.Marionette.LayoutView({
    el: '#main',
    regions: {
        content: "#app-content",
        header: "#app-header",
        footer: "#app-footer"
    },
    template: require('./templates/layout.html'),

});

mainLayout.render();

var buttonLayout = new Backbone.Marionette.ItemView({
    template: require('./templates/view1.html'),

});


mainLayout.content.show(buttonLayout);
//var panel = new PanelView();

//mainLayout.content.show(panel);



// var TodoList = Marionette.CollectionView.extend({
//     el: '#app-hook',
//     tagName: 'ul',
//
//     childView: ToDo
// });
//
// var todo = new TodoList({
//     collection: new Backbone.Collection([
//         {assignee: 'Scott', text: 'Write a book about Marionette'},
//         {assignee: 'Andrew', text: 'Do some coding'}
//     ])
// });
//
// todo.render();