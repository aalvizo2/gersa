const express= require('express')
const app= express()
const connection= require('./routes/db')

console.log('hola desde node')

app.listen(8080)