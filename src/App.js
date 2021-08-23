import React, { useState } from "react";
import "./App.css";

function Todo({ todo }) {

  return (
    <>
      <ul>
        <li>
          {todo.title}: 
          {todo.description}
        </li>
      </ul>
    </>
  )
}

function AddTodo ({ addTodo }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const clickHandler = (e) => {
    e.preventDefault()

    addTodo({ title, description })
  }

  const titleChange = (e) => {
    setTitle(e.target.value)
  }

  const descriptionChange = (e) => {
    setDescription(e.target.value)
  }

  return (
    <>
    <input value={ title } onChange={ titleChange } type="text" placeholder="Title" />
    <input value={ description } onChange={ descriptionChange } type="text" placeholder="Description" />
    <button onClick={ clickHandler }>Add</button>
    </>
  )
}

function App() {
  const [todos, setTodos] = useState([{
    title: "test_title" ,
    description: "test_description"
  }])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)])
  }

  return (
    <>
    <AddTodo addTodo={ addTodo }/>
        {todos.map((todo, index) => (
          <Todo 
            todo={todo}
            key={index}
          />
        ))}
    </>
  );
}

export default App