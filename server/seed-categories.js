const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

async function seedCategories() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        multipleStatements: true
    });

    try {
        console.log('Reading seed_categories.sql...');
        const sql = fs.readFileSync(path.join(__dirname, 'seed_categories.sql'), 'utf8');

        console.log('Populating comprehensive category list...');
        await connection.query(sql);

        console.log('Categories populated and organized successfully!');
    } catch (err) {
        console.error('Error seeding categories:', err);
    } finally {
        await connection.end();
    }
}

seedCategories();
