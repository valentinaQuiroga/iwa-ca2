// Project configurations
const express = require('express'); // import express
const app = express(); // initialize app with express

//create a base route with a response
app.get('/', (req, res) => {
    res.send('Server running');
});

//export the app
module.exports = app;