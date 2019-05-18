// Requiring our models
var db = require("../models");

// Routes
//  =============================================================
module.exports = {
    create: function(req, res) {
        db.Message.create(req.body).then(function(data) {
          res.json(data);
        });
      },
      findMessageByUser: function(req, res) {
        db.Message.findAll({
          where: {
            UserId: req.params.id
          }
        }).then(function(data) {
          res.json(data);
        });
      },
      findMessageByPromoter: function(req, res) {
        db.Message.findAll({
          where: {
            PromoterId: req.params.id
          }
        }).then(function(data) {
          res.json(data);
        });
      },
      update: function(req, res) {
        db.Message.update(
          req.body,
          {
            returning: true,where: {
              id: req.body.id
            }
          }).then(function(data) {
            console.log(data)
          res.json(data);
        });
      },
};