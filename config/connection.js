const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Password1!',
      database: 'leash_league'
    },
    console.log('Connected to the leash_league database.')
  );

  module.exports = db;