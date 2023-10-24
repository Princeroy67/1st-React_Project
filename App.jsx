import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const maxValue=20;
  const minValue=0;
//const counter=15;
const addValue=()=>{
 // console.log('Clicked',counter);
  //counter++;
  //setCounter(counter++);
  if(counter<=maxValue){
    setCounter(counter++);
  }
  else{
    alert('Max Value Crossed');
    
  }
}
const removeValue=()=>{
  //console.log('Clicked',counter);
  //
  counter=counter-1;
  //setCounter(counter);
  if(counter>=minValue){
    setCounter(counter);
  }
  else{
    alert('Min Value Crossed');
  }
}
  return (
    <>
     <h1>Learning React</h1>
     <h2>Counter Value : {counter}</h2>
     <button
     onClick={addValue}
     >Increase Value{counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Decrease Value{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
