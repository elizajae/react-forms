import React, { useState, } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

function TodoList () {

    const [todos, setTodos] = useState([])

    function removeTodoFn(index) {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }

    function addTodoFn(newTodo) {
        setTodos([...todos, newTodo])
    }

    return (
        <div>
            {todos.map((todo, index) => (
                <Todo key = {index} onRemoveTodo={removeTodoFn}
                index={index} text={todo}
                />
            ))}
            <NewTodoForm addTodo={addTodoFn}  />
        </div>
    )
}

export default TodoList;
