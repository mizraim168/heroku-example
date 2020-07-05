// Imports
const {Pool} = require('pg');

// Connection to postgres
    const pool = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'test',
        port: '5432'
    
    });
    console.log('DB is coneted');
   
    

// Export connection
module.exports = {Pool, pool};

