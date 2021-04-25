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
var http = require('http'), //This module provides the HTTP server functionalities
    path = require('path'), //The path module provides utilities for working with file and directory paths
    fs = require('fs'), //This module allows to work witht the file system: read and write files back
    
   server = http.createServer(app); //This is where our server gets created
    
const bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirname, '../FrontEnd'))); //We define the FrontEnd folder as the one where all static content will be served
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import our routes
const routes = require('./Routes/PostsRoutes');

app.get('/', function(req, res) {

    res.render('index.html');

});

//middleware to use our routes
app.use('/', routes);

//export the app
module.exports = app;

