import React from "react";
import { connect } from "react-redux";

import {
  deleteTodo,
  updateTodoImportant,
  updateTodoDone,
  loadTodos
} from "../store/todos/todoReducer";

const Todos = props => {
  const handeFilter = todo => {
    if (!props.filter.showImportant && !todo.important) return false;
    if (!props.filter.showDone && todo.done) return false;
    return true;
  };

  // renderöi todo-rivit propseina annetun datan pohjalta
  const maketodoRows = () => {
    return props.todos.filter(handeFilter).map((todo, i) => {
      return (
        <tr
          key={i}
          id={i}
          style={todo.done ? { textDecoration: "line-through" } : null}
        >
          <td>{i}</td>
          <td onClick={() => props.updateTodoDone(todo)}>{todo.content}</td>
          <td>
            <button onClick={() => props.updateTodoImportant(todo)}>
              {todo.important.toString()}
            </button>
          </td>
          <td>
            <button onClick={() => props.deleteTodo(todo)}> delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h3>Your todos</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo (click to set done)</th>
            <th>Important</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{maketodoRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("Todos state", state);
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  loadTodos,
  updateTodoDone,
  updateTodoImportant,
  deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
