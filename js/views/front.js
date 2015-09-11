
var app = app || {};

app.FrontView = Backbone.View.extend({
  el: $('#front-page'),
  frontTemplate: _.template($('#front-template').html()),
  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.frontTemplate);
  }
});
