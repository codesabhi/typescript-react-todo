import React from "react";
import { Todo } from "../models";
import SingleTodo from "./SingleTodo";
import "./todoStyle.css";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}: Props) => {
    return (
        <div className="todos">
            {todos.map((todo)=>(
                <SingleTodo todos={todos} key={todo.id} todo={todo} setTodos={setTodos}/>
            ))}
        </div>
    )
}

export default TodoList
