var app = app || {};
var app = app || {}

app.boroughObject = {
  "Queens": ["Bayside Municipal Parking Field", "College Point Municipal Parking Field"],
  "Bronx" : ["Belmont Municipal Parking Field", "White Plains Road Municipal Parking Field"],
  "Brooklyn": ["Avenue M Municipal Parking Field", "Bay Ridge Municipal Parking Field"],
  "Manhattan": ["Delancey and Essex Municipal Parking Garage"],
  "Staten Island": ["Ferry Terminal South Municipal Parking Field", "Great Kills Municipal Parking Field"]
};

//This renders the front page view of the website
app.SelectView = Backbone.View.extend({
  el: $('#front-page'),
  selectTemplate: _.template($('#select-template').html()),
  render: function(){
    $('#front-page').empty();
    console.log('Iam');
    this.$el.html(this.selectTemplate);
    for(var borough in app.boroughObject){
      $('#borough', this.el).append('<option value="'+borough+'">'+borough+'</option>');
    }
    return this;
  },

  events: {
    'change #borough': 'populateGarages',
  },

  populateGarages: function(){
    $('#garages',this.el).empty();
    var garages = app.boroughObject[$('#borough',this.el).val()];
    //$('#garages',this.el).append('<option>'+Select+'</option>');
    $('#garages',this.el).append('<option>'+'Select'+'</option>');
    for(var i=0; i < garages.length; i++){
      $('#garages',this.el).append('<option value="'+garages[i]+'">'+garages[i]+'</option>');
    }
    $('#garages',this.el).removeAttr('disabled');
  },

});

