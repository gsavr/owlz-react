// Requiring our models
var db = require("../models");

// Routes
//  =============================================================
module.exports = {
  findAll: function(req,res){
    db.User.findAll({}).then(function(data) {
      res.json(data);
     });
  },
  findOne: function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  },
  create: function(req, res) {
    db.User.create(req.body).then(function(data) {
      res.json(data);
    });
  },
  update: function(req, res) {
    db.User.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(data) {
      res.json(data);
    });
  },
  remove: function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  }
};
