import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllow, setnumberAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [pass, setpass] = useState("")
 
  const passwordGenrator= useCallback(()=>{
    let pass="";

    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllow) str+="0123456789"
    if(charAllow) str+= "!@#$%^&*(){}~`";
    
    for(let i=1;i<=Array.length;i++){
      let char = math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char);
    }

    setpass(pass)

  },[length,numberAllow,charAllow,pass])
   
  return (
    < >
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={pass} className='outline-none w-full py-1 px-3'placeholder='password' readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" min={6} max={100} value={length}  className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={numberAllow} id='numberinput' 
            onChange={()=>{
              setnumberAllow((prev)=>!prev)
            }}/>
             <label htmlFor='numberinput'>Numbers</label>
            
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={charAllow} id='charinput' 
            onChange={()=>{
              setcharAllow((prev)=>!prev)
            }}/>
             <label htmlFor='numberinput'>Characters</label>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
