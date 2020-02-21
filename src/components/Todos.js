import React from "react";
// import { connect } from "react-redux";
import { toggleImportant } from "../services/todoService";

const Todos = props => {
  const handeleImportantToggle = async id => {
    console.log(id);
    const todo = props.todos.find(t => t.id === id);
    const todoToChange = { ...todo, important: !todo.important };
    await toggleImportant(todoToChange); // muutos serverille
    props.setTodos(props.todos.map(t => (t.id === id ? todoToChange : t))); // muutetaan statea - ei ladata uusia serveriltä
  };

  // renderöi todo-rivit propseina annetun datan pohjalta
  const maketodoRows = () => {
    return props.todos.map((todo, i) => {
      return (
        <tr key={i}>
          <td>{i}</td>
          <td>{todo.content}</td>
          <td onClick={() => handeleImportantToggle(todo.id)}>
            {todo.important.toString()}
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
          </tr>
        </thead>
        <tbody>{maketodoRows()}</tbody>
      </table>
    </div>
  );
};

export default Todos;
