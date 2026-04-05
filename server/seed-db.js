const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

async function seedDB() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        multipleStatements: true
    });

    try {
        console.log('Reading seed.sql...');
        const sql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');

        console.log('Seeding database...');
        await connection.query(sql);

        console.log('Database seeded successfully.');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await connection.end();
    }
}

seedDB();
