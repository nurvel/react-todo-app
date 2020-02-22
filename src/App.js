import React, { useEffect } from "react";
import { connect } from "react-redux";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import FilterComponent from "./components/FilterComponent";

import { loadTodos } from "./store/todos/todoActions";

const App = props => {
  useEffect(() => {
    props.loadTodos(); // käyttää reduxin kautta actionia, joka lataa todot App:n propseisin
  }, [props]);

  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <FilterComponent />
      <Todos />
    </div>
  );
}

const mapDispatchToProps = {
  loadTodos
};

export default connect(null, mapDispatchToProps)(App);
