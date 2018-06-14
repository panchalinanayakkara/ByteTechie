var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

//Import Routes
var indexRoutes = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
})); 

//Define an engine to return an html file
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks){
  fs.readFile(path, 'utf-8', callback);
});

//Tell the server to return static files
app.use(express.static(path.join(__dirname, '../client')));

//Routes
app.use('/', indexRoutes);

//Error Handling
app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

//Export the App
module.exports = app;
