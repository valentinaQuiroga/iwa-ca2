// Main entry point of my project

//require app.js
const app = require('./app');

//start server on port 8000
var port = process.env.PORT || 8000;
app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});