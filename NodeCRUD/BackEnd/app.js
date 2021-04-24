// Project configurations
const express = require('express'); // import express
const app = express(); // initialize app with express

//import our routes
const routes = require('./Routes/PostsRoutes');

//middleware to use our routes
app.use('/', routes);

//export the app
module.exports = app;

