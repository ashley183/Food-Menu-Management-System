const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

async function initDB() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        multipleStatements: true // Required for running schema.sql
    });

    try {
        console.log('Reading schema.sql...');
        const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');

        console.log('Initializing database...');
        await connection.query(sql);

        console.log('Database initialized successfully.');
    } catch (err) {
        console.error('Error initializing database:', err);
    } finally {
        await connection.end();
    }
}

initDB();
