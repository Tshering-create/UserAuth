const pgpInit = require('pg-promise')
require('dotenv').config();


const pgp = pgpInit();


const db = pgp({
    host: 'process.env.DB_HOST',
    port: 5432, // Default PostgreSQL port
    database: process.env.DB_NAME,
    
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: false,
})

module.exports = db;