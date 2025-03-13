import { useState } from 'react'
// import './App.css'
import List from './pages/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List/>
    </>
  )
}

export default App

