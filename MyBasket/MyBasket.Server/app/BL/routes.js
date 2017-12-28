exports.setupRoutes = function (app, db, dbUtils) {
    var basketModule = require('./modules/basketModule.js');

    basketModule.setup(dbUtils);

    app.get('/getUsers', basketModule.getUsers);
}