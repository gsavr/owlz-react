const router = require("express").Router();
const userRoutes =require("./user");
const promoterRoutes =require("./promoter");

// User Routes
router.use("/users", userRoutes);
router.use("/promoters", promoterRoutes);

module.exports = router;