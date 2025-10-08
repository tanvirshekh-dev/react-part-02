// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Calculate from './Calculate'
import Batsmen from './Batsmen'
// import Counter from './Counter'
import Display from './Display'
import './App.css'
import Bowler from './Bowler'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'
import { Suspense } from 'react'
import Players from './Players'


// const fetchFriend = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json()
// }

// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   return res.json()
// }




function App() {
  // const friendsPromise = fetchFriend();
  // const postPromise = fetchPosts();

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
      <Display></Display>

      {/* <Calculate></Calculate> */}
      {/* <Players></Players> */}
      
      {/* <Suspense fallback={<h3>Post are coming soon.....</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Our friends is coming and pay the bill...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
      

      {/* <Users></Users> */}

      {/* <Bowler name='Ajgor'></Bowler> */}
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
