const express= require('express')
const Router= express.Router()
const connection= require('./db')

connection.query('SELECT * FROM usuarios', (err, field)=>{
    if(err) throw err 
    console.log(field)
})

module.exports= Router