const mysql= require('mysql2')

const connection= mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '123456789',
    database: 'gersa_admin'
})
connection.connect((err)=>{
    if(err) throw err 
    console.log('connected to database correctly')
})
module.exports= connection