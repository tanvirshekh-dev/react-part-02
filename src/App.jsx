// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Batsmen from './Batsmen'
import Counter from './Counter'
import './App.css'
import Bowler from './Bowler'

function App() {

  function handleClick() {
    alert('Click 01')
  }

  const handleClick2 = () => {
    alert('Click 02')
  }

  function handleAdd5 (num){
    const newNum = num + 10;
    alert(newNum)
  }

  return (
    <>
      <h1>React Core Concept Part 02</h1>
      <Bowler name='Ajgor'></Bowler>
      {/* <Batsmen></Batsmen> */}
      {/* <Counter></Counter> */}


      {/* <button onClick={handleClick}>Click 01</button>

      <button onClick={handleClick2}>Click 02</button>

      <button onClick={function handleClick3() {
        alert("click 03")
      }}>Click 03</button>

      <button onClick={()=> alert("Click 04")}>Click 04</button>
       */}
      {/* arrow function //function expression ---> {() => handleAdd5(20)}*/}
      {/* <button onClick={() => handleAdd5(20)}>Add button 05</button> */}
    </>
  )
}

export default App
