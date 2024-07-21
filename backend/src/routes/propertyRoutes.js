const express = require('express');
const propertyController = require('../controllers/propertyController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware.protect);

router.route('/')
  .get(propertyController.getAllProperties)
  .post(authMiddleware.restrictTo('admin'), propertyController.createProperty);

router.route('/:id')
  .get(authMiddleware.restrictTo('admin'), propertyController.getProperty)
  .put(authMiddleware.restrictTo('admin'), propertyController.updateProperty)
  .delete(authMiddleware.restrictTo('admin'), propertyController.deleteProperty);

module.exports = router;