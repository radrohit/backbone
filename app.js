
// Model
var ContentModel = Backbone.Model.extend({
	// No Collection is defined so we use url root 
	// temporarily as the place to fetch our json response
	urlRoot: "http://localhost/drupal-7.39/rest/node",
	// Parses the JSON responses from the server 
	// and creates a backbone friendly json object
	parse: function (response) {
		var obj = {
			'id' : response.vid,
			'title' : response.title,
			'value' : response['body']['und'][0]['value'],
			'type' : response.type
		}

		return obj;
	}
});


// Get Method
var content_get = new ContentModel({id: 40});
content_get.fetch({
	success: function(contentResponse){
		console.log("Found the book: " + contentResponse.get("title"));
	}
});



//Post Method
var content_post = new ContentModel(
	{
		"title": "Saving from Backbone",
		"type": "page",
		"body": { 
			"und": [{ 
			  "value": "test body!"
			 }]
  }
	});

content_post.save({}, {
	success: function(model,response,options){
		console.log("The model has been saved to server");
	},
	error: function(model,xhr,options){
		console.log("Something went wrong while saving the model");
	},
	parse: false
});

//Delete Method
var content_delete = new ContentModel({ id: 59 });
content_delete.destroy({
	success: function(model,response,options) {
		console.log("The model has deleted from the server");
	},
	error: function(model,xhr,options){
		console.log("Something went wrong while deleting the model");
	}
});

//Put Method

var content_update = new ContentModel({id: 40 });
content_update.fetch({
	success:function(contentResponse){
		console.log("The content has been found");
		contentResponse.set("title", contentResponse.get("title") + "_updated");
		contentResponse.save({}, {
			success: function(model, response, options){
				console.log("The model has been updated in the server");
			},
			error: function(model, xhr, options){
				console.log("Something went wrong while updating the model");
			},
			parse: false
		});
	}
});
