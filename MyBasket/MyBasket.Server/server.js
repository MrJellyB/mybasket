'use strict';
var express = require("express");
var http = require("http");

var app = express();

var database = {};

var url = 'mongodb://localhost:27017';

//app.use(express.static(__dirname + "/src"));

var server = http.createServer(app);

server.listen(8080, null, null, function () {
    console.log("server running at http://8080");
});