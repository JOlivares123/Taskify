import React, {useState} from 'react';

import { InputField, TodoList} from './components';
import './App.css'
import { Todo } from './interfaces/Todo';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodoAdd=(e: React.FormEvent)=>{
    // prevents page from refreshing when submitting
    e.preventDefault()

    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      // empty input field
      setTodo('')
    }
  }
  
  return (
    <div className="App">
      <h1 className='Header'>Taskify</h1>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleTodoAdd={handleTodoAdd}
      />

      <TodoList todos={todos} setTodos={setTodos}/>
    
    </div>
  );
}

export default App;
