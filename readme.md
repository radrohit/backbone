# Install Following Modules in Drupal
1. Services
2. CORS
## Services
Add an endpoint to service module called rest
## CORS
Add following lines to CORS in configuration. This allows every url to perform CRUD operator. We could restrict it
*|<mirror>|POST,PUT,DELETE|Content-Type,Authorization|true
