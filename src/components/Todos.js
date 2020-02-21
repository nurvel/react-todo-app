import React from "react";
// import { connect } from "react-redux";
import { toggleImportant, deleteTodo } from "../services/todoService";

const Todos = props => {
  const handeleImportantToggle = async id => {
    console.log(id);
    const todo = props.todos.find(t => t.id === id);
    const todoToChange = { ...todo, important: !todo.important };
    await toggleImportant(todoToChange); // muutos serverille
    props.setTodos(props.todos.map(t => (t.id === id ? todoToChange : t))); // muutetaan statea - ei ladata uusia serveriltä
  };

  const handleDeleteClick = async id => {
    console.log(id);
    //    const todo = props.todos.find(t => t.id === id);
    await deleteTodo(id); // muutos serverille
    props.setTodos(props.todos.filter(t => t.id !== id)); // muutetaan statea - ei ladata uusia serveriltä
  };

  // renderöi todo-rivit propseina annetun datan pohjalta
  const maketodoRows = () => {
    return props.todos.map((todo, i) => {
      return (
        <tr key={i}>
          <td>{i}</td>
          <td>{todo.content}</td>
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
      <h2>Todos</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo</th>
            <th>Important</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{maketodoRows()}</tbody>
      </table>
    </div>
  );
};

export default Todos;
