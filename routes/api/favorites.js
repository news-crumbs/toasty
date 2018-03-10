const router = require("express").Router();
const favoriteController = require("../../controllers/favoriteController");

// Matches with "/api/books"
router.route("/")
  .get(favoriteController.findAll)
  .post(favoriteController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(favoriteController.findById)
  .put(favoriteController.update)
  .delete(favoriteController.remove);

module.exports = router;
