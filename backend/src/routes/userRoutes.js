const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware.protect);

router.route("/user").get(userController.getUser);

router
  .route("/:id")
  .get(userController.getUsers)
  .delete(userController.deleteUser)
  .put(authMiddleware.restrictTo("admin"), userController.updateUser);

module.exports = router;
