const express = require('express');
const router = express.Router();
const itemIngredientController = require('../controllers/itemIngredientController');

router.post('/', itemIngredientController.addItemIngredient);
router.delete('/:itemId/:ingredientId', itemIngredientController.removeItemIngredient);

module.exports = router;
