import React, { useEffect } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <Filter />
      <Todos />
    </div>
  );
};

export default App;
