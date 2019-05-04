const router = require("express").Router();
const userRoutes =require("./user");

// User Routes
router.use("/users", userRoutes);

module.exports = router;