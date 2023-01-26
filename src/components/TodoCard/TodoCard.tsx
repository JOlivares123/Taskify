import React, { useEffect, useState, useRef } from 'react'
import { AiFillDelete, AiFillEdit, AiFillCheckCircle } from 'react-icons/ai'
import { Todo } from '../../interfaces/Todo'
import './TodoCard.css'

interface TodoCardProps {
    todoItem: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoCard: React.FC<TodoCardProps> = ({todoItem, todos, setTodos})=> {
    const inputRef = useRef<HTMLInputElement>(null);

    const [editMode, setEditMode] = useState<boolean>(false);
    const [editedTodo, setEditedTodo] = useState<string>(todoItem.todo)

    // need to get edit, delete, done icons
    const handleDone = (id: number) =>{
        setTodos(
            todos.map(t => 
            t.id === id? 
            {...t, isDone: !t.isDone}
            :
            t
        ))
    }

    const handleEdit = (id: number) =>{
        if(!editMode && !todoItem.isDone){
            setEditMode(true)
        }
    }

    const handleEditSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        
        setTodos(
            todos.map(t =>
                t.id === id?
                {...t, todo: editedTodo}
                :
                t
            )
        )
        setEditMode(false);
    }

    const handleDelete = (id: number) =>{
        setTodos(todos.filter(t => t.id !== id))
    }

    useEffect(()=>{
        // when edit mode is clicked, we focus on that specific todoItem. The input field
        // would be ready for typing
        inputRef.current?.focus();
    },[editMode])

    return (
    <form className='TodoCard' onSubmit={(e) => handleEditSubmit(e, todoItem.id)}>
        {editMode ?
            <input ref={inputRef} className='TodoCard_text' type='input' value={editedTodo} onChange={(e)=> {
                setEditedTodo(e.target.value)
            }}/>
            :
            (todoItem.isDone ?
                (<s className='TodoCard_text'>{todoItem.todo}</s>)
                :
                <span className='TodoCard_text'>{todoItem.todo}</span>)
        }           
        
        <div>
            <span onClick={() => handleEdit(todoItem.id)} className='icon'>
                <AiFillEdit/>
            </span>
            <span onClick={() => handleDelete(todoItem.id)} className='icon'>
                <AiFillDelete/>
            </span>
            <span onClick={() => handleDone(todoItem.id)} className='icon'>
                <AiFillCheckCircle/>
            </span>
        </div>
    </form>)
}