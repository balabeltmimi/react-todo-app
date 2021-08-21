import React, { useState } from "react";

function Todo({todo}) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'kuy',
      text: 'prayut',
    }
  ])
}

return (
  <div className="app">
    <div className="todo-list">

    </div>
  </div>
)

exports[App]
