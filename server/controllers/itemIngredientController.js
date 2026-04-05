const pool = require('../config/db');

exports.addItemIngredient = async (req, res) => {
    const { menu_item_id, ingredient_id, quantity } = req.body;
    try {
        await pool.query(
            'INSERT INTO ITEM_INGREDIENTS (menu_item_id, ingredient_id, quantity) VALUES (?, ?, ?)',
            [menu_item_id, ingredient_id, quantity]
        );
        res.status(201).json({ menu_item_id, ingredient_id, quantity });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removeItemIngredient = async (req, res) => {
    const { itemId, ingredientId } = req.params;
    try {
        await pool.query('DELETE FROM ITEM_INGREDIENTS WHERE menu_item_id = ? AND ingredient_id = ?', [itemId, ingredientId]);
        res.json({ message: 'Ingredient removed from item' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
