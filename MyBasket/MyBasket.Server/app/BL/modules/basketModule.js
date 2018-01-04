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

exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    dbUtils.login(email, password, function (err, data) {
        res.send((data && Object.keys(data).length !== 0));
    })
}

exports.register = function (req, res) {
    var data = req.body.data;
    dbUtils.register(data, function (err, data) { res.send(true)});
}

exports.getCategories = function(req, res) {
    dbUtils.getCategories(function(err, data) { res.send(data); });
}