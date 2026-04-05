const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');

router.get('/', menuItemController.getAllMenuItems);
router.get('/category/:categoryId', menuItemController.getMenuItemsByCategory);
router.post('/', menuItemController.createMenuItem);
router.put('/:id', menuItemController.updateMenuItem);
router.delete('/:id', menuItemController.deleteMenuItem);

module.exports = router;
