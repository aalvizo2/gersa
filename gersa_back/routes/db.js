const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'gersa_admin'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  
  } else {
    console.log('Connected to database correctly');
  }
});

module.exports = connection;