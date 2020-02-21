import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Filter from "./components/Filter";

import { loadTodos } from "./store/todos/todoReducer";

// import { getTodos } from "./services/todoService";

const initialFilterState = {
  showImportant: true,
  showDone: true
};

function App(props) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(initialFilterState);

  useEffect(() => {
    props.loadTodos(); // käyttää reduxin kautta actionia, joka lataa todot App:n propseisin
    //refreshTodos();
  }, []);

  // const refreshTodos = () => {
  //   getTodos()
  //     .then(t => setTodos(t))
  //     .catch(err => console.log(err));
  // };

  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo todos={props.todos} setTodos={setTodos} />
      <Filter filter={filter} setFilter={setFilter} />
      <Todos setTodos={setTodos} filter={filter} />
    </div>
  );
}

const mapStateToProps = state => {
  console.log("App state", state);
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  loadTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
