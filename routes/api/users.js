const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .post(userController.create);
// router.route("/")
//   .get(userController.findAll);

// Matches with "/api/users/:id"
router.route("/")
  .get(userController.findByNom);

module.exports = router;
