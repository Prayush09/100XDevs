//------------DEBOUNCE AND CUSTOM HOOKS

import {React, useState, useEffect} from 'react'
// import { usePostTitle, useFetch } from './hooks/useFetch.jsx';
// import { usePrev } from './hooks/usePrev.jsx';
import { useDebounce } from './hooks/useDebounce.jsx';
/*
  //custom hook, starts with a use... 

  function useValue(){
    const[value, setValue] = useState(1);

    return value;
  }

  Debouncing: The requests to backend is protected behind a debouncer function, so that when the search bar changes, and the user types something
  it goes to this debounce function and the debouncer decides if the user is typing fast or small and to send the backend a request for the user or not.

*/
//My first custom hook....
// function useCounter(setNewValue){
//     const[value, setValue] = useState(setNewValue);
    
//     function increaseCount(){
//       setValue(preValue => preValue + 1);
//     }

//     return [value, increaseCount];
// }

function App() {
  //const[count, setCount] = useState(1);  //const {post} = useFetch("");
  //const { finalData, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/"+count, 10);

  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error: {error}</p>;
  
  //----------
  // const [state, setState] = useState(0);
  // const prev = usePrev(state);

  const [sendData, setSendData] = useState("");
  const debounce = useDebounce(sendData, 300);

  function sendDataToBackEnd() {
    console.log("Sending data to backend:", debounce);
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: debounce })
    })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    if (debounce !== null && debounce !== "") {
      sendDataToBackEnd();
    }
  }, [debounce]);

  function change(e) { 
    setSendData(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        onChange={change} 
        placeholder="Type something..."
      />
      <p>Debounced: {debounce}</p>
    </>
  );

  // return(
  //   <>
  //   <p>{state}</p>
  //   <button 
  //     onClick={()=>{
  //       setState((curr)=>curr+1);
  //     }}>click me</button>

  //   <p>The previous value was: {prev}</p>
  //   </>
  // )

  // return (
  //   <div>
  //     <button onClick={()=>setCount(2)}>Go to post 2</button>
  //     <button onClick={()=>setCount(3)}>Go to post 3</button>
  //     <button onClick={()=>setCount(4)}>Go to post 4</button>
  //     <h1>Data fetched:</h1>
  //     <pre>{JSON.stringify(finalData, null, 2)}</pre>
  //   </div>
  // );
}



export default App
