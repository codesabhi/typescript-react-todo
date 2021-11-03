import React, { useState } from 'react'
import { Todo } from '../models'
import "./todoStyle.css"


interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,setTodos, todos}: Props) => {
    
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    return (
        <form className="todos__single">
            <input value={editTodo} className="todos__single--text"/>

        </form>
    )
}

export default SingleTodo
