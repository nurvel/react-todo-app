import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteTodo,
  updateTodoImportant,
  updateTodoDone
} from "../store/todos/todoActions";

const Todos = props => {
  const todosToShow = ({ todos, filter }) => {
    const filterConstaints = todo => {
      if (!filter.showImportant && !todo.important) return false;
      if (!filter.showDone && todo.done) return false;
      return true;
    };
    return todos.filter(filterConstaints);
  };

  const { todos } = useSelector(state => ({
    todos: todosToShow(state)
  }));
  const dispatch = useDispatch();

  const maketodoRows = () => {
    return todos.map((todo, i) => {
      return (
        <tr
          key={i}
          id={i}
          style={todo.done ? { textDecoration: "line-through" } : null}
        >
          <td>{i}</td>
          <td onClick={() => dispatch(updateTodoDone(todo))}>{todo.content}</td>
          <td>
            <button onClick={() => dispatch(updateTodoImportant(todo))}>
              {todo.important.toString()}
            </button>
          </td>
          <td>
            <button onClick={() => dispatch(deleteTodo(todo))}> delete</button>
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

export default Todos;
