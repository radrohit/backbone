var app = app || {};

//This renders the front page view of the website
app.SelectView = Backbone.View.extend({
  el: $('#select-page'),
  selectTemplate: _.template($('#select-template').html()),
  render: function(){
    console.log('selectTemplate');
    this.$el.html(this.selectTemplate);
  },
});

