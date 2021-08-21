import React, { useState } from "react";
import "./App.css";

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    { text: "one" },
    { text: "two" }
  ])

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App