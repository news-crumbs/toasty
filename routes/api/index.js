const router = require("express").Router();
const articleRoutes = require("./articles");
const userRoutes = require("./users");
const favoriteRoutes = require("./favorites");

// Book routes
router.use("/articles", articleRoutes);
router.use("/users", userRoutes);
router.use("/favorites", favoriteRoutes);

module.exports = router;
