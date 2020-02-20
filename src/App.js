import React, { useState, useEffect } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Filter from "./components/Filter";

import { getTodos } from "./services/todoService";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then(t => setTodos(t))
      .catch(err => console.log(err));
  }, []);

  console.log(todos);

  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <Todos todos={todos} />
      <Filter />
    </div>
  );
}

export default App;
