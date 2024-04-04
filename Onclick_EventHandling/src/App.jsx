import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import eventhandle from './eventhandle';

function App() {
  const [count, setCount] = useState(0)
 const func=()=>{alert("This is arrow function with constant")}
  return (

    <>
      <button onClick={function one(){alert("Inline function")}}>ES5 Inline Function</button>
      <button onClick={()=>{alert("arrow function")}}>ES5 arrow function</button>
      <button onClick={func}>ES5 arrow function with constant</button>
        <button onClick={eventhandle} >Click me</button>
       
    </>
  )
}

export default App
