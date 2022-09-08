import { useState } from 'react'
import Home from './Pages/Home'
import Record from './Pages/Record'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Record />
    </>
  )
}

export default App
