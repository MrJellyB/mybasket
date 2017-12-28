'use strict';
var express = require("express");
var http = require("http");
var mongodb = require('./node_modules/mongodb');
var MongoClient = mongodb.MongoClient;

var app = express();

var database = {};

var users = [];

var userCollections = {};

var url = 'mongodb://localhost:27017';

app.use(express.static(__dirname + "/src"));

var server = http.createServer(app);

server.listen(8080, null, null, function () {
    console.log("server running at http://8080");
});


// set up the db
var setupToDb = function(url) {
    MongoClient.connect(url, function (err, client) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        }

        database = client.db('test');

        userCollections = database.collection('users');
    })
}

// create the database
setupToDb(url);


app.get('/getUsers', function(req, res) {
    var users = [];
    userCollections.find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
})