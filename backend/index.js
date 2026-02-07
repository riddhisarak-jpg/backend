//lec-1:-
// require('dotenv').config()

// const express = require('express') //statementy use for common js
// const app = express() //app is powerful object which has many methods and properties to create a server and handle requests and responses
// const port =3000 //jis port par chahiye uss port par listen karo 
// const api ={
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

// app.get('/', (req, res) => { // '/' is the home route,
//   res.send('Hello World!')
// })

// app.get('/twitter',(req,res)=>{
// res.send('<h1>Riddhi</h1>')
// })

// app.get('/api',(req,res)=>{
// res.json(api)
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//lec-2:-
import express from  'express' // statement use in module js --- "type":module
const app=express()

app.get('/',(req,res)=>{
  res.send("Server is ready");
});

app.get('/data',(req,res)=>{
      const data = [
    {
      title: "What is Timeline Text?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "11 April 2024 12:30 PM",
    },
    {
      title: "What is Timeline Text?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "11 April 2024 12:30 PM",
    },
    {
      title: "What is Timeline Text?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "11 April 2024 12:30 PM",
    },
    {
      title: "What is Timeline Text?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "11 April 2024 12:30 PM",
    },
    {
      title: "What is Timeline Text?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: "11 April 2024 12:30 PM",
    },
  ];
res.send(data);

});

const port=process.env.PORT || 3000;

 app.listen(port,()=>{
  console.log(`SERVE at http://localhost${port}`);
 });