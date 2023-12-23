// Create a web server

// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Add a route to the application
app.get('/', (request, response) => {
  response.send('Hello World');
});

// Start the server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});