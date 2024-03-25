import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [bgColor, setBgColor] = useState('black');

  const increaseValue = () => {
    setCounter(counter + 1);
    changeBackgroundColor();
  };

  const decreaseValue = () => {
    if(counter>=1){
    setCounter(counter - 1);
    changeBackgroundColor();}
  };

  const changeBackgroundColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <><div>
      
    </div>
      <h1 style={{color:bgColor}}>Hello everyone</h1> 
      <h3>Counter: {counter}</h3>
      <button onClick={increaseValue}>Increase Counter</button>
      <br />
      <button onClick={decreaseValue}>Decrease Counter</button>
</>
  );
}

export default App;
