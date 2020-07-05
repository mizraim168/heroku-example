// Imports
const {pool} = require('../database');

// Object methods
const userController = {};

// Get Users Method: (GET) 
userController.getUsers = async (req, res) =>{
   const response = await pool.query('SELECT * FROM users');
   console.log(response.rows);
   res.json(response.rows);
}
// Get User Method: (GET) Params: (ID)
userController.getUser = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
    console.log(response);
    res.json(response.rows)
}
// Create User Method: (POST)
userController.postUser = async (req, res) =>{
    const {username, password, email} = req.body;
    const response = await pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, password, email]);
    console.log(response);
    res.json({
        Message: 'OK',
        Status: 200,
        Data: {
            User: {
                username: username,
                password: password,
                email: email
            }
        }
    });
    
}
// Put User Method: (PUT) Params: (ID)
userController.putUser = async (req, res) =>{
    const id = req.params.id;
    const {username, password, email} = req.body;
    const response = await pool.query('UPDATE users SET username = $1, password = $2, email = $3 WHERE user_id = $4', [username,password,email, id]);
    console.log(response);
    res.json({
        Message: 'User Updated',
        Status: 200,
        NewData: {
            username: username,
            password: password,
            email: email
        }
    })
    
}
// Delete User Method: (DELETE) Params: (ID)
userController.deleteUser = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE user_id = $1', [id]);
    console.log(response);
    res.json({
        Message: 'Deleted user OK',
        Status: 200
    })
}


// Export methods
module.exports = userController;