import { useState } from 'react'
import './App.css'
import Inputs from './inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-gray-100 h-screen flex items-center flex-col w-screen">
      <h1 className="text-8xl font-bold text-center">
        Wordle
        <Inputs />
      </h1>
    </div>
  )
}

export default App
