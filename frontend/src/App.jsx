import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
 const[data,setdata]=useState([]);//state to store data from backend

useEffect(()=>{
  axios.get('/data')//request to backend server
  .then((response)=>{ //response to request 
    setdata(response.data);
  })
  .catch((error)=>{ //error if any 
    console.log(error);
  })
},[])//empty dependency array means this effect will run only once when the component mounts

  return (
    <>
     <h1>Welcome to the Frontend App</h1> 
     <p>DATA: {data.length}</p>
     { 
      data.map((item,index)=>( //why not curly braces? because we are directly returning the JSX element, if we use curly braces we need to use return statement to return the JSX element
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <small>{item.time}</small>
        </div>
      ))
     }
    </>
  )
}

export default App
