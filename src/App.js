import React from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Filter from "./components/Filter";

function App() {
  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <Todos />
      <Filter />
    </div>
  );
}

export default App;
