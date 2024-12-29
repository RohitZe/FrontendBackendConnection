import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const[jokes,setjokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=> {setjokes(response.data)})
    .catch((error) => console.error(error))
  })

  return (
    <>
      <h1>my first full stack frontend</h1>
      <h1>Length{jokes.length}</h1>
    </>
  )
}

export default App
