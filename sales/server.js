var express = require('express');       
var app = express();                 
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');


//Database in the cloud 
mongoose.connect('mongodb://localhost:27017/sales');

//webroot
app.use('/', express.static(__dirname+'/public'));

//router
var router = require('./router')
//router webroot
app.use('/api', router);

//start server
var port = process.env.PORT || 8080;
app.listen(port);
console.log('WebServer listen:  http://localhost:' + port);