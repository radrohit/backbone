var app = app || {}

app.Router = Backbone.Router.extend({
  routes: {
    '': 'front_item',
    'select': 'select_item'
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


});
