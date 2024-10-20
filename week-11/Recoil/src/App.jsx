import "./App.css"
import { useState } from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counter } from './store/atoms/counter'
//ATOMS: units of state that can be read from and written to from any component. 
//When an atom's state changes, all component that subscribe to that atom will change.


//step 1: wrap the app in Recoil.
function App(){
  return (
    <RecoilRoot> 
      <Counter />
    </RecoilRoot>
  )
}
//-----------------THIS WAS BUILD USING useState() -----------------------------------
// function Decrease({setCount}){
//   function decrease(){
//     setCount(count => count - 1);
//   }

//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }

// function Increase({setCount}){
//   function increase(){
//     setCount(count => count + 1);
//   }

//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// }

// function Counter(){
//   const [count, setCount] = useState(0);
//   return <div>
//     {count}
//     <Increase setCount={setCount}/>
//     <Decrease setCount={setCount}/>
//   </div>
// }
//----------BUILD USING RECOIL--------------------------------

function Decrease(){
  const setCount = useSetRecoilState(counter);

  function decrease(){
    setCount(count => count - 1);
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Increase(){

  const setCount = useSetRecoilState(counter);//setCount in an atom is useSetRecoilState

  function increase(){
    setCount(count => count + 1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

function CurrentCount(){
  const count = useRecoilValue(counter);//subscribing to an atom, a getter method, useRecoilValue...
  return <div>
    {count}
  </div>
}

function Counter(){
  const [count, setCount] = useState(0);
  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

//create an atom: you can define your atom in a different folder, and file. usually atoms...


export default App;