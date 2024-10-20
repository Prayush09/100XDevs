import React, {useState, createContext, useContext} from 'react';
//contexts are always created outside the component chain, usually in a seperate file.
const BulbContext = createContext();

//wrapper component, which will wrap some children and make the code very modecular.
function BulbProvider({children}){
  const [bulbstate, setBulbState] = useState(true); //for prop drilling demo purposes.
  //wrapping the context inside a provider so that it's available to the children which need the context.
  return <BulbContext.Provider value={{
      bulbstate: bulbstate,
      setBulbState: setBulbState
    }}> 
      {children}
  </BulbContext.Provider>
}

function App(){
  //The main application is very molecular now, BulbProvider will be hidden somewhere now.
  return <div>
    <BulbProvider> 
      <LightBulb />
    </BulbProvider>
  </div>
}


function LightBulb(){
  //prop drilling of taking it from the least common ancestor, and passing it to the children that need it.
  //this is an anti pattern, as the code becomes un-readability, un-maintainable and unecessary complexity.
  //Now I have added Context API therefore the code works without prop drilling,
  return <div>
    <BulbState/>
    <ToggleBulbState/>
  </div>
}

function BulbState(){
  //here I want to use setBulbState in ToggleBulbState, but I can't right now, therefore I will use props.
  //const [bulbstate, setBulbState] = useState(true);
  const { bulbstate} = useContext(BulbContext);
  return <div>
    {bulbstate ? "bulb on" : "bulb off"}
  </div>
}

function ToggleBulbState(){
  const {setBulbState} = useContext(BulbContext);
  function toggle(){
    setBulbState(c => !c);
  }
  return (
    <>
      <button onClick={toggle}>Toggle the bulb</button>
    </>
  )
}

  //prop drilling => when you need to pass data from higher layer component to a lower level component which is serveral layers deep.
  //context API => a powerful feature that can fix the problem of prop drilling.
  //Provides a way to share values (state, function, etc.) b/w components without having to pass props down manually at every level. 
  //Application Programmable Interface.

  /*
    How to use Context api
      Context: This is created using React.createContext(). It servers as a container for the data you want to share
        twitter => [tweets]
        instagram => [posts]
      
      Provider: This component wraps part of your application and provides the context value to all its descendants. 
                Any component that is a child of this provider can access the context.
      Consumer: useContext(//context) so that the context can be consumed by the childrens


    State Management Library
      It lets you re-render only the updated states and not re-render things that are not changing state.
  */
export default App;