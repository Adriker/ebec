var http = require('http');
var path = require('path');

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();
var server = http.createServer(app);

mongoose.connect('mongodb://localhost:27017/ebec');

app.use('/node_modules', express.static(path.join(__dirname, '/../node-modules')));
app.use(express.static(path.join(__dirname, '/../src')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use('/', router);
require('./user/user.route')(router);

server.listen(process.env.PORT || 3000);
module.exports = server;
