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
//app.use('/users',require('./routes/users.routes'));
app.get('/', function(req,res){
    res.send("Hello world")
});
//Server listen
app.listen(process.env.PORT, ()=> {
    console.log("Server On Port ", app.get('port'))
});
