var app = app || {};

$(function(){
  new app.FrontView();
  router = new app.Router();
  Backbone.history.start();

});
