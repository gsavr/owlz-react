const router = require("express").Router();
const messagesController = require("../../controllers/messagesController");

router.route("/")
.post(messagesController.create)

router.route("/:id")
.get(messagesController.findMessageByUser)
.put(messagesController.update)

module.exports = router;