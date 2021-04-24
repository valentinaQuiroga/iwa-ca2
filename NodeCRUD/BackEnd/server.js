// Main entry point of my project

const mongoose = require('mongoose');

require('dotenv').config({ path: '.env'});

//Database connection
mongoose.connect(process.env.DATABASE,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then((result) => console.log('connected to db'));


mongoose.connection.on('error',(err) => {
    console.error(`Database Connection Error → ${err.message}`);
});

//require our models here so that it can be accessed throughtout the application
require('./Models/Posts');

//require app.js
const app = require('./app');

//start server on port 8000
var port = process.env.PORT || 8000;
app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});