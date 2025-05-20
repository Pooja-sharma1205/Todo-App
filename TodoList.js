import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoList() {
  const[todos, setTodos]=useState([]);
  const[inputValue,setInputValue]=useState('')
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='container mt-5'>
    <h1 className="text-center">TodoList</h1>
    <div className="input-group mb-3">
    <input type="text" value={inputValue} className="form-control" onChange={handleInputChange} placeholder='Enter a new todo list'></input>
    <button className="btn btn-primary" onClick={handleAddTodo}>
    Add
    </button>
    </div>
    <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
           
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTodo(index)}>
            Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
      

  )
}

export default TodoList