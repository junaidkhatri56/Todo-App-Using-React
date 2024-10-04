import React, { useRef, useState } from 'react'

function App() {
  const input = useRef();
  const[todo, setTodo] = useState([]);

  function add(e){
       e.preventDefault()

       todo.push(input.current.value);
       setTodo([...todo])

       input.current.value = ""    
  }
  
  function deleteTodo(index){
       const newTodo = [...todo]
       newTodo.splice(index, 1)
       setTodo(newTodo) 
  }
  function editTodo(index) {
       let updatedTodo = prompt("Enter your Todo ")
       todo.splice(index, 1, updatedTodo);
       setTodo([...todo])
  }


  return (
    <>   <div className='container'>
          <h1>Todo App</h1>
        <form onSubmit={add}> 
              <input type="text" className='input' ref={input}/>
              <button>add</button>    
        </form>

        <ol>
             {todo.length > 0 ? todo.map((item, index)=>{
                 return <li key={index}> {item} 
                  <button onClick={deleteTodo}>Delete</button>
                  <button onClick={editTodo}>Update</button>
                 </li>   
             }):"No Item Found"}
        </ol>
        </div>
    </>
  )
}

export default App