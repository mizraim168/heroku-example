//Imports
const express = require('express');
const morgan = require('morgan');
const app = express();
const {pool} = require('./database');

//Settings 
app.set('port', process.env.PORT || 3000);

//Middleswares 
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/users',require('./routes/users.routes'));

//Server listen
app.listen(3000, ()=> {
    console.log("Server On Port ", app.get('port'))
});
