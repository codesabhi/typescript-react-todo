import React, { useState } from 'react'
import './App.css'
import InputFeilds from './components/InputFeilds'
import TodoList from './components/TodoList'
import { Todo } from './models'

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone:false}])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className="Heading">
        Taskify
      </span>
      <InputFeilds todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      
      
    </div>
  )
}

export default App
