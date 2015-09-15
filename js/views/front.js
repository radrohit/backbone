// If app is already declared use that or use empty object
var app = app || {};

//This renders the front page view of the website
app.FrontView = Backbone.View.extend({
  // Select the DOM element with div tag front-page
  el: $('#front-page'),
  // Store as a function template with id front-template from our index.html in frontTemplate variable
  frontTemplate: _.template($('#front-template').html()),
  // When FrontView is invoked we want to render the page
  initialize: function(){
    this.render();

  },
  events: {
    'click #start-form': 'startForm'
  },

  // Render the frontTemplate function
  render: function(){
    this.$el.html(this.frontTemplate);
  },

  startForm: function(){
    router = new app.Router();
    Backbone.history.start();
    this.$el.hide();
    router.navigate('select',true);
    Backbone.history.stop();

  },
});
