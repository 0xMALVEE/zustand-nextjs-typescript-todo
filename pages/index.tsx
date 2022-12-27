import React from "react";
import useStore from "../store/useStore";

const Todo: React.FC = ():JSX.Element =>{
  const [todo, setTodo] = React.useState<string>('')
  const todos = useStore(state => state.todos)
  const addTodo = useStore(state => state.addTodo)

  const add = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        addTodo(todo)
  }

  return(
    <div>
      <h1>TODO LIST</h1>
      <input type="text" onChange={e=> setTodo(e.currentTarget.value)} />
      <button onClick={add}>add</button>
      {todos.map((item, index)=>(
          <div key={index}> 
            {item}
          </div>
      )      
      )}
    </div>
  )
}

export default Todo;