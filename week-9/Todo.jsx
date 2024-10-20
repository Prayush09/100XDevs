import './App.css'
import {useState} from 'react';

export default function App() {
  //useRef, react-hook-forms -> Usually used to make forms in React
  
 const [todos, setTodos] = useState([{
   title: "Go to Gym",
   description: "Hit the gym regularly",
   done: false
 }]);

  function addTodo(){
    let newArray = [...todos];
    newArray.push({
      title:document.getElementById("title").value,
      description:document.getElementById("description").value,
      done: true
    })
    setTodos(newArray);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }
  
  return(
    <div>
      <input id="title" type="text" placeholder="Add a todo"></input>
      <input id="description" type="text" placeholder="Description"></input>
      <br/>
      <button onClick={addTodo}> Add Todo </button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          description={todo.description}
          done={todo.done}
        />
      ))}
      
    </div>
  );
}

function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.done ? "Task is done" : "Task is not done"}</p>
    </div>
  )
}
