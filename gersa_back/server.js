const express= require('express')
const app= express()
const connection= require('./routes/db')
const login= require('./routes/login')
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

console.log('hola desde node')

app.post('/acceder',(req, res) => {
   const { username, password } = req.body;
   console.log('Received login request:', { username, password });
});
app.get('/', (req, res)=>{
   res.send('hello')
})

const port=3308;
app.listen(port, ()=>
{

console.log(`server listing port ${port}`);

}


)
