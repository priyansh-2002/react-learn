import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowwed] = useState(false)
  const [charAllowed, setCharAllowwed] = useState(false)
  const [password, setPassword] = useState("")
  //useRef hook
  const passwordRef = useRef(null)

  /*useCallback(() => {} (function), [](dependency array))*/
  const passwwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])/*if runs, optimises, keeps in memory(cache) */

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() /*? is for optional select*/
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  /*useEffect(() => {}(function), [](dependency array))*/
  useEffect(() => {passwwordGenerator()}, [length, numberAllowed, charAllowed, passwwordGenerator])/* if any ched-chad in all, re-run things */

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-amber-50'
        placeholder='Password'
        readOnly
        ref={passwordRef} />
        <button className='bg-blue-800 px-2 transform transition hover:scale-110 hover:bg-white'
        onClick={copyPasswordToClipboard}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={30}
          value={length}
          className='curson-pointer'
          onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={() => {setNumberAllowwed((prev) => !prev) /*reverse the previous value*/}} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={() => {setCharAllowwed((prev) => !prev)}}/>
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
