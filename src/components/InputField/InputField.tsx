import React, {useRef} from 'react'

import './InputField.css'

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleTodoAdd: (e: React.FormEvent) => void
}

export const InputField:React.FC<InputFieldProps> = ({todo, setTodo, handleTodoAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTodo(e.target.value)
    }

    return (
        <form className='input' onSubmit={(e) => {
            handleTodoAdd(e)
            // helps get rid of focused state when you press enter
            inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                type='input'
                placeholder='Enter a task' 
                className='input_box'
                value={todo}
                onChange={e => handleInputChange(e)}
            />
            <button className='input_submit'>Create</button>
        </form>
    )
}