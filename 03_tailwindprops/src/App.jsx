import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'priyansh',
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-full'>Tailwind Test</h1>

      <Card username="chai peelo" btnText='touch me...' />
      <Card username='Priyansh' btnText='touch here...' />
      <Card username='Priyansh'  />
    </>
  )
}

export default App
