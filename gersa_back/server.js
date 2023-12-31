const express= require('express')
const app= express()
const connection= require('./routes/db')
const login= require('./routes/login')
const cors = require('cors')
const bodyParser = require('body-parser')
const session= require('express-session')

app.use(session({
   secret: 'my secret', 
   resave: false, 
   saveUninitialized: true
}))


app.use(cors());
app.use(bodyParser.json());

console.log('hola desde node')

app.use('/', login)


const port=3308
app.listen(port, ()=>{

   console.log('server running on 3308')
})