// If app is already declared use that or use empty object
var app = app || {};

//This renders the front page view of the website
app.InformationView = Backbone.View.extend({
  // Select the DOM element with div tag front-page
  el: $('#front-page'),
  // Store as a function template with id front-template from our index.html in frontTemplate variable
  informationTemplate: _.template($('#information-template').html()),

  events: {
    'submit form#license-info': 'licenseForm',
    'click #previous-form-select': 'previousForm',
  },

  licenseForm: function(){
    var firstName = $('#fname').val(),
        lastName = $('#lname').val(),
        address = $('#address').val(),
        city = $('#city').val(),
        state = $('#state').val(),
        zip = $('#zip').val(),
        licenseNo = $('#licenseno').val()
        id = $('#id').val();
  },

  // Render the frontTemplate function
  render: function(){
    this.$el.empty();
    this.$el.html(this.informationTemplate);
  },

  previousForm: function(){
    router.navigate('select',true);
  }
});
