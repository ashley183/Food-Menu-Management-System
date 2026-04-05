const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'server', '.env') });

async function checkCategories() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });

    try {
        const [rows] = await connection.query('SELECT * FROM CATEGORIES;');
        console.log(JSON.stringify(rows, null, 2));
    } catch (err) {
        console.error('Error fetching categories:', err);
    } finally {
        await connection.end();
    }
}

checkCategories();
