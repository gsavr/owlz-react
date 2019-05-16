const router = require("express").Router();
const userRoutes =require("./user");
const promoterRoutes =require("./promoter");
const messageRoutes = require("./message");

// User Routes
router.use("/users", userRoutes);
router.use("/promoters", promoterRoutes);
router.use("/messages", messageRoutes);

module.exports = router;