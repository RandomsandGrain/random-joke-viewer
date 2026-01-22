import './App.css'
import { useState, useEffect } from 'react'
import Child from "./Child"
function App() {
const API_JOKE_CALL = "https://official-joke-api.appspot.com/random_joke"
const [joke, setJoke] = useState({})
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)

const apiCall = async () => {
  setLoading(true)
  setError(false)
  try{
     const result = await fetch(API_JOKE_CALL);
  const data = await result.json()
  setJoke(data)
  }
  catch(thisError){
    setError(true)
    console.log(thisError)
  }
 finally{
  setLoading(false)
 }
}

useEffect(() => {
  apiCall()
}, []);

  return (
  <div>
<Child joke={joke} loading={loading} error={error} apiCall={apiCall}/>
  </div>
  )
}

export default App
