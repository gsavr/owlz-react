const router = require("express").Router();
const promotersController = require("../../controllers/promotersController");

router.route("/")
.get(promotersController.findAll)
.post(promotersController.create);


router
  .route("/city/:city")
  .get(promotersController.listpromoter)

// Matches with "/api/promoters/:id
//router
//   .route("/:id")
//   .get(promotersController.findOne)
//   .put(promotersController.update)
//   .delete(promotersController.remove);

module.exports = router;