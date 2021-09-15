require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING
});

pool.on('connect', () => {
    console.log('Connection Success to Postgres');
})

module.exports = {
    query:(text, params) => pool.query(text, params)
}