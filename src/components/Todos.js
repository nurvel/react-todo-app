import React from "react";
import { updateTodo, deleteTodo } from "../services/todoService";

const Todos = props => {
  const handeleImportantToggle = async id => {
    const todo = props.todos.find(t => t.id === id);
    const todoToChange = { ...todo, important: !todo.important };
    await updateTodo(todoToChange); // muutos serverille
    props.setTodos(props.todos.map(t => (t.id === id ? todoToChange : t))); // muutetaan statea - ei ladata uusia serveriltä
  };

  const handleDeleteClick = async id => {
    await deleteTodo(id); // muutos serverille
    props.setTodos(props.todos.filter(t => t.id !== id)); // muutetaan statea - ei ladata uusia serveriltä
  };

  const handeleDoneToggle = async id => {
    const todo = props.todos.find(t => t.id === id);
    const todoToChange = { ...todo, done: !todo.done };
    await updateTodo(todoToChange); // muutos serverille
    props.setTodos(props.todos.map(t => (t.id === id ? todoToChange : t))); // muutetaan statea - ei ladata uusia serveriltä
  };

  const handeFilter = todo => {
    if (!props.filter.showImportant && todo.important) return false;
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
          <td onClick={() => handeleDoneToggle(todo.id)}>{todo.content}</td>
          <td>
            <button onClick={() => handeleImportantToggle(todo.id)}>
              {todo.important.toString()}
            </button>
          </td>
          <td>
            <button onClick={() => handleDeleteClick(todo.id)}> delete</button>
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
