const router = require("express").Router();
const promotersController = require("../../controllers/promotersController");

router.route("/")
.get(promotersController.listpromoter)
.post(promotersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(promotersController.listpromoter)
  .put(promotersController.update)
  .delete(promotersController.remove);

module.exports = router;