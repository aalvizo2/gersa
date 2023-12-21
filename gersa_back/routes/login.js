const express= require('express')
const Router= express.Router()
const connection= require('./db')

Router.post('/acceder',(req, res) => {
    const { username, password } = req.body;
    console.log('Received login request:', { username, password })
    connection.query('SELECT * FROM usuarios WHERE usuario=? AND pass=?', [username, password], (err, datos)=>{
        if(datos.length >0){
            req.session.name= true
            req.session.usuario= username
            const usuario= req.session.usuario
            console.log(usuario)
            res.json({success: true, message: 'Login Exitoso'})
        }else{
            console.log('Error de autenticacion')
        }
    })
 })

module.exports= Router