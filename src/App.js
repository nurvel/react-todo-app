import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Filter from "./components/Filter";

import { loadTodos } from "./store/todos/todoReducer";

function App(props) {
  useEffect(() => {
    props.loadTodos(); // käyttää reduxin kautta actionia, joka lataa todot App:n propseisin
  }, []);

  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <Filter />
      <Todos />
    </div>
  );
}

const mapDispatchToProps = {
  loadTodos
};

export default connect(null, mapDispatchToProps)(App);
