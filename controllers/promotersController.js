// Requiring our models
var db = require("../models");

// Routes
//  =============================================================
module.exports = {
  
  findAll: function(req,res){
    db.Promoter
      .findAll({})
      .then(function(data) {
        res.json(data);
      });
  },

  listpromoter: function(req,res){
    db.Promoter.findAll({
        where:{
            city: req.params.city
        }
    }).then(function(data) {
      res.json(data);
     });

  },
  login: function(req, res) {
    db.Promoter.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(function(data) {
      res.json(data);
    });
  },
  findOne: function(req, res) {
    db.Promoter.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  },
  create: function(req, res) {
    db.Promoter.create(req.body).then(function(data) {
      res.json(data);
    });
  },
  update: function(req, res) {
    db.Promoter.update(
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
    db.Promoter.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  }
};
