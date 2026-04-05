const pool = require('../config/db');

exports.getAllMenuItems = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM MENU_ITEMS');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMenuItemsByCategory = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const [items] = await pool.query('SELECT * FROM MENU_ITEMS WHERE category_id = ?', [categoryId]);
        
        // Fetch ingredients for each item
        for (let item of items) {
            const [ingredients] = await pool.query(`
                SELECT i.id AS ingredient_id, i.name, ii.quantity, i.is_allergen
                FROM INGREDIENTS i
                JOIN ITEM_INGREDIENTS ii ON i.id = ii.ingredient_id
                WHERE ii.menu_item_id = ?
            `, [item.id]);
            item.ingredients = ingredients;
        }
        
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createMenuItem = async (req, res) => {
    const { category_id, name, description, price, image_url } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO MENU_ITEMS (category_id, name, description, price, image_url) VALUES (?, ?, ?, ?, ?)',
            [category_id, name, description, price, image_url]
        );
        res.status(201).json({ id: result.insertId, category_id, name, description, price, image_url });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateMenuItem = async (req, res) => {
    const { id } = req.params;
    const { category_id, name, description, price, image_url, is_available } = req.body;
    try {
        await pool.query(
            'UPDATE MENU_ITEMS SET category_id = ?, name = ?, description = ?, price = ?, image_url = ?, is_available = ? WHERE id = ?',
            [category_id, name, description, price, image_url, is_available, id]
        );
        res.json({ id, category_id, name, description, price, image_url, is_available });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteMenuItem = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM MENU_ITEMS WHERE id = ?', [id]);
        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
