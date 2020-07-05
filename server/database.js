// Imports
const {Pool} = require('pg');

// Connection to postgres
    const pool = new Pool({
        host: process.env.HOST , //'localhost'
        user: process.env.USER, //'postgres',
        password: process.env.PASSWD, //'postgres',
        database: process.env.DATABASE, //'test',
        port: process.env.PORTDB //'5432'
    
    });
    console.log('DB is coneted');
   
    

// Export connection
module.exports = {Pool, pool};

