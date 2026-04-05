const pool = require('../config/db');

exports.getAllIngredients = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM INGREDIENTS');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createIngredient = async (req, res) => {
    const { name, is_allergen } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO INGREDIENTS (name, is_allergen) VALUES (?, ?)',
            [name, is_allergen || false]
        );
        res.status(201).json({ id: result.insertId, name, is_allergen });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateIngredient = async (req, res) => {
    const { id } = req.params;
    const { name, is_allergen } = req.body;
    try {
        await pool.query(
            'UPDATE INGREDIENTS SET name = ?, is_allergen = ? WHERE id = ?',
            [name, is_allergen, id]
        );
        res.json({ id, name, is_allergen });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteIngredient = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM INGREDIENTS WHERE id = ?', [id]);
        res.json({ message: 'Ingredient deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
