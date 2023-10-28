const express= require('express')
const app= express()
const connection= require('./routes/db')
const login= require('./routes/login')

console.log('hola desde node')

app.get('/', (req, res)=>{
    app.use('/', login)
})

