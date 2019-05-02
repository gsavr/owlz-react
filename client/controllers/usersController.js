// Requiring our models
var db = require("../models");

// Routes
//  =============================================================
module.exports = function(app) {
  // Get route for retrieving all of the Users
    app.get("/user/all", function(req, res) {
      db.User.findAll({}).then(function(data) {
        res.json(data);
       });
    });
};
