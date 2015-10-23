# Drupal Backbone App

Application uses drupal as backend rest server. To make drupal into a rest server. Based on the following tutorial 
http://www.codeproject.com/Articles/797899/BackBone-Tutorial-Part-CRUD-Operations-on-Backbone

## Install Following Modules in Drupal
  - Services
  - CORS
  - Devel Generate


### Services
Add an endpoint to service module called rest
### CORS
Add following lines to CORS in configuration. This allows every url to perform CRUD operator. This prevent cross browser prevention. This is not a good practice. I allowed it for quick generation of application. 

```sh
*|<mirror>|POST,PUT,DELETE|Content-Type,Authorization|true
```

### Devel Generate
This generates the content type. The program uses articles and page as primary content type

### To run the application
- click on index.html
- set  up localhost on port 8080
```sh
python -m SimpleHTTPServer 8080
```

### Results

They are generated in the console. It can be access by clicking F12 on your chrome browser.

```sh
Sample output
Found the book: Et Jugis Sit Utinam_updated_updated_updated_updated_updated
app.js:70 The content has been found
app.js:58 The model has deleted from the server
app.js:46 The model has been saved to server
app.js:74 The model has been updated in the server
```

