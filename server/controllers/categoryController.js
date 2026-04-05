const pool = require('../config/db');

exports.getAllCategories = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM CATEGORIES WHERE active = TRUE ORDER BY sort_order');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCategory = async (req, res) => {
    const { name, description, sort_order, parent_id } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO CATEGORIES (name, description, sort_order, parent_id) VALUES (?, ?, ?, ?)',
            [name, description, sort_order || 0, parent_id || null]
        );
        res.status(201).json({ id: result.insertId, name, description, sort_order, parent_id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, description, sort_order, active, parent_id } = req.body;
    try {
        await pool.query(
            'UPDATE CATEGORIES SET name = ?, description = ?, sort_order = ?, active = ?, parent_id = ? WHERE id = ?',
            [name, description, sort_order, active, parent_id || null, id]
        );
        res.json({ id, name, description, sort_order, active, parent_id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM CATEGORIES WHERE id = ?', [id]);
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
