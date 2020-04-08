import React from "react";

import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import FilterHandle from "./components/FilterHandle/FilterHandle";

const App = () => {
  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <FilterHandle />
      <TodoList />
    </div>
  );
};

export default App;
