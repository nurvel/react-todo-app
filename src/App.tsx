import React, { useEffect } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import FilterComponent from "./components/FilterComponent";

const App = () => {
  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <FilterComponent />
      <Todos />
    </div>
  );
};

export default App;
