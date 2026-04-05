const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

async function clearCategories() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });

    try {
        console.log('Clearing all categories and associated menu items...');
        // Using DELETE instead of TRUNCATE to respect foreign key constraints and CASCADE
        await connection.query('DELETE FROM CATEGORIES');
        console.log('All categories and menu items have been deleted successfully.');
    } catch (err) {
        console.error('Error clearing categories:', err);
    } finally {
        await connection.end();
    }
}

clearCategories();
