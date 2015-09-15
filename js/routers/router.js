var app = app || {}

app.Router = Backbone.Router.extend({
  initialize: function(){

  },
  routes: {
    '': 'front_item',
    'select': 'select_item'
  },

  front_item: function(){
    frontView = new app.FrontView();
    frontView.render();
  },

  select_item: function(){
    selectView = new app.SelectView();
    selectView.render();
  },


});
