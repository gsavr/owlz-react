const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
.get(usersController.findAll)
.post(usersController.create);


router.route("/login")
.post(usersController.login);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .put(usersController.update)
  .get(usersController.findOne)
  .delete(usersController.remove);


module.exports = router;