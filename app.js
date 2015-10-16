
// Model
var ContentModel = Backbone.Model.extend({
	urlRoot: "http://localhost/drupal-7.39/rest/node",
	parse: function (response) {
		var obj = {
			'id' : response.vid,
			'title' : response.title,
			'value' : response['body']['und'][0]['value'],
			'type' : response.type
		}

		return obj;
		//console.log(response['body']['und'][0]['value']);
	}
});

var content = new ContentModel({id: '3'});

alert(content.url());