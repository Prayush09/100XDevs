import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

//conditional rendering
function App() {
  //use state hook
  //it lets you add state to functional components. It returns an array with the current state and a function to update it.
  
  //without array dependency.
  // const [isVisible, setVisible] = useState(false);
  // return <div>
  //   <button onClick={function(){setVisible(!isVisible)}}>start counter</button>
  //   {isVisible ? <Counter></Counter>: null}
  // </div>

  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count => count+1);
  }

  //with array dependency.
  return <div>
    <DependencyArray count={count}></DependencyArray>
    <button onClick={increaseCount}>Increase Count</button>
  </div>
}


function Counter(){
  //initialized only once. after that re-rending ignores this, even though it runs.
  const [count, setCount] = useState(0);

  console.log("inside function");
  //mounting: hooking into the lifecycle events (mounting, rendering, re-rendering) of react.
  //we use useEffect for running the code inside it only once.
  //we are guarding our setInterval from rendering. 
  //useEffect has two parameters. one is a function and other is a dependency array.
  //mounting should have some logic, but when the component un-mounts then there should be some "cleanup" logic.
  useEffect(function(){
    let clock = setInterval(()=>{
      setCount(function(currVal){
        return currVal + 1;
      });//state has changed, re-render the page.
    }, 1000)
    console.log("mounted");
    return () => {
      console.log("Unmount");
      clearInterval(clock);
    } //when the function unmounts. This is called cleanup logic, so that unecessary things does not work.
    //These things are only working on mount and un-mount because dependency array is empty.
  }, []);

  //now let's understand what is dependency array

  //react call the whole function again, when the function changes in state,

  return <div>
    <h1>
      {count}
    </h1>
  </div>
}
//mounting, re-rendering, unmounting <=== life cycle event

//might also want to run something, when some state changes.
function DependencyArray(props){

  //say you want some logic to run when the count component changes.
    useEffect(()=>{
      console.log("mount");

      return function(){
        console.log("unmount");
      }
    },[]);

    //this will only run when the dependencies change.
    useEffect(()=>{
      console.log("props have changed")
      //first time => mount only, second time when count changes => cleanup then mount.
      return function(){
        console.log("cleanup the count")
      }
    },[props.count]);

    return <div>
      Counter {props.count}
    </div>
}


export default App
