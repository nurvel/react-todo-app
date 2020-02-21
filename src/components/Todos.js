import React from "react";
import { connect } from "react-redux";

import {
  deleteTodo,
  updateTodoImportant,
  updateTodoDone,
  loadTodos
} from "../store/todos/todoActions";

const Todos = props => {
  // renderöi todo-rivit propseina annetun datan pohjalta
  const maketodoRows = () => {
    return props.todos.map((todo, i) => {
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

const todosToShow = ({ todos, filter }) => {
  const filterConstaints = todo => {
    if (!filter.showImportant && !todo.important) return false;
    if (!filter.showDone && todo.done) return false;
    return true;
  };

  return todos.filter(filterConstaints);
};

const mapStateToProps = state => {
  console.log("Todos state", state);
  return {
    todos: todosToShow(state),
    filter: state.filter
  };
};

const mapDispatchToProps = {
  loadTodos,
  updateTodoDone,
  updateTodoImportant,
  deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
