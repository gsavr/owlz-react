// Requiring our models
var db = require("../models");

// Routes
//  =============================================================
module.exports = {
  listPromoter: function(req,res){
    db.Promoter.findAll({
        where:{
            city: req.params.city
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
    db.Promoter.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        handle:req.body.handle,
        descriptions:req.body.about,
        city:req.body.city,
        languages:req.body.language,
        phone_number: req.body.phone_number,
        email: req.body.email,
        instagram:req.body.instagram,
        profile_pic: req.body.profile_pic,
    },{
        where:{
            id: req.body.id
        }
    }).then(function(dbPromoter){
      res.json(dbPromoter)
    })
  },
  update: function(req, res) {
    db.Promoter.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        handle:req.body.handle,
        descriptions:req.body.about,
        city:req.body.city,
        languages:req.body.language,
        phone_number: req.body.phone_number,
        email: req.body.email,
        instagram:req.body.instagram
    }, {
        where: {
          id: req.body.id
        }
      })
    .then(function(data) {
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
