# Install Following Modules in Drupal
  - Services
  - CORS
  - Devel Generate


### Services
Add an endpoint to service module called rest
### CORS
Add following lines to CORS in configuration. This allows every url to perform CRUD operator. We could restrict it
*|<mirror>|POST,PUT,DELETE|Content-Type,Authorization|true
### Devel Generate
This generates the content type. The program uses articles and page as primary content type
