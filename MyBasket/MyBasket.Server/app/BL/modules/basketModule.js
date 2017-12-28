var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;

var dbUtils = null;

exports.setup = function (db) {
    dbUtils = db;
}

exports.getUsers = function (req, res) {
    dbUtils.getUsers(function (err, results) {
        console.log(results);
        res.send(results);
    })
}