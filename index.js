require('dotenv').config()

const express = require('express')
const app = express() //app is powerful object which has many methods and properties to create a server and handle requests and responses
const port =3000 //jis port par chahiye uss port par listen karo 

app.get('/', (req, res) => { // '/' is the home route,
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
res.send('<h1>Riddhi</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
