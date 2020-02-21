import React from "react";
// import { connect } from "react-redux";

const Todos = props => {

  // renderöi todo rivit propseina annetun datan pohjalta
  const maketodoRows = () => {
    return props.todos.map((todo, i) => {
      return (
        <tr key={i}> 
          <td>{i}</td>
          <td>{todo.content}</td>
          <td>{todo.important.toString()}</td>
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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{maketodoRows()}</tbody>
      </table>
    </div>
  );
};

export default Todos;
