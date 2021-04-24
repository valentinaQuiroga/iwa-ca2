/***************************************************************************************
*    Title: <CRUD app using Node.JS, Express & MongoDB>
*    Author: <Mayur Nalwala>
*    Date: <22/09/2020>
*    Code version: <1>
*    Availability: <https://medium.com/@nmayurashok/crud-app-using-node-js-express-mongodb-part-2-564839cbf8c4>
*
***************************************************************************************/

// Project configurations
const express = require('express'); // import express
const app = express(); // initialize app with express

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import our routes
const routes = require('./Routes/PostsRoutes');

//middleware to use our routes
app.use('/', routes);

//export the app
module.exports = app;

