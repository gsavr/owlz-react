const router = require("express").Router();
const messagesController = require("../../controllers/messagesController");

// Matches with "/api/messages/"
router.route("/")
.post(messagesController.create)

// Matches with "/api/messages/:id"
router.route("/:id")
.get(messagesController.findMessageByUser)
.put(messagesController.update)

// Matches with "/api/messages/promoters/:id"
router.route("/promoters/:id")
.get(messagesController.findMessageByPromoter)

module.exports = router;