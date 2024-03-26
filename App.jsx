import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Car from './components/Car'
function App() {
  // let counter=0;
  let[bgcolor,setcolor]=useState('black');  
  let [counter,setcounter]= useState(0);
  const increase=()=>{
    setcounter(counter+1);
    changeColor();
  }
  const decrease=()=>{
    setcounter(counter-1);
    changeColor();
  }

  const changeColor=()=>{
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setcolor(randomColor);
  }
  return (
    <>
      <h1 style={{color:bgcolor}}>Hello Everyone</h1>
      <h3>Counter:{counter}</h3>
      <button onClick={increase}>Increase Counter</button> <br />
      <button onClick={decrease}>Decrease Counter</button>
        {/* <Card name="Sankalp" pic="https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
<br />
        <Card name="Vishwa" pic="https://images.pexels.com/photos/20498968/pexels-photo-20498968/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
        <br /> */}

        <Car name="Sankalp" pic="https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <br />
        <Car name="Tanaya" pic="https://images.pexels.com/photos/20498968/pexels-photo-20498968/free-photo-of-mongolian-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
        <br />
<h2 className='font-semibold text-4xl text-sky-600 bg-sky-950 px-8 py-8 rounded-full'>Tailwind</h2>
    </>
  )
}

export default App
