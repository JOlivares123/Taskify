import React from 'react'
import { Todo } from '../../interfaces/Todo'
import { TodoCard } from '../TodoCard/TodoCard'
import './TodoList.css'

interface TodoListProps{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList: React.FC<TodoListProps> = ({todos, setTodos}) =>{
    return (
    <div className='TodoList'>
        {todos.map((t) => {
            return (
            <TodoCard 
                todoItem={t}
                key={t.id}
                todos={todos}
                setTodos={setTodos}
            />)
        })}
    </div>
    )
}