var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'front_item',
    'front': 'front_item',
    'select': 'select_item',
    'information': 'information_view'
  },

  front_item: function(){
    frontView = new app.FrontView();
    frontView.render();
  },

  select_item: function(){
    console.log('second event called');
    selectView = new app.SelectView();
    selectView.render();
  },

  information_view: function(){
    console.log('Information View getting called');
    informationView = new app.InformationView();
    informationView.render();

  }


});
