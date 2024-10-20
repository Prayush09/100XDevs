// import React from 'react'
// import { BrowserRouter, Routes, Route, useNavigate, Outlet } from "react-router-dom"; //Hash Router

// const App = props => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="*" element={<ErrorPage />}></Route>
//           <Route path="/neet/online-coaching-class-11" element={<Class11Program />}></Route>
//           <Route path="/neet/online-coaching-class-12" element={<Class12Program />}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// function Layout(){
//   return <div>
//     header
//     <Outlet />
//     footer
//   </div>
// }

// function Class11Program(){
//   return <div>
//     Neet programs for Class 11th
//   </div>
// }

// function ErrorPage(){
//   return <div>
//     <h1>404 - Page Not Found!</h1>
//   </div>
// }

// function Class12Program(){
//   const navigate = useNavigate();

//   function redirectUser(){
//     navigate("/");
//   }
  
//   return <div>
//     Neet programs for Class 12th
//     <button onClick={redirectUser}>Go back to landing Page</button>
//   </div>
// }

// function Landing(){
//   return (
//     <h1>Welcome to allen</h1>
//   )
// }


// export default App

/*
//   userRef => a hook that provides a way to create a reference to a value or a DOM element that persists 
//   across renders but does not trigger a re-render when the value changes.

    We use useRef or useState, so that we can manipulate the componenets for each re-render.
    Using useRef, means we will only change those values but will not re-render as the component is not being used on the front-end.
    useState will make sure the page will re-render, even if the content on the page is the same, therefore we use useRef() instead of useState().
    useRef() persists across the renders but will not trigger a re-render.

*/


import React, { useRef, useState } from 'react'

const App = () => {

  const inputRef = useRef();

  async function  focusOnInput(){
    console.log("Before ref");
    await new Promise((resolve)=>{setTimeout(()=>{
      resolve();
      inputRef.current.focus();}, 3000)
    });
    console.log("After ref");
  }

  const [curr, setCurr] = useState(0);
  const timer = useRef();

  function Clock(){
    let value = setInterval(()=>{
      setCurr(c => c + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock(){
    clearInterval(timer.current);
  }
  

  return (
    <div>
      {curr}
      <button onClick={Clock}>start clock</button>
      <button onClick={stopClock}>stop clock</button>
    </div>
  )
}

export default App

