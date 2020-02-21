import React from "react";
// import { connect } from "react-redux";

const Todos = props => {
  const maketodoRows = () => {
    //const { todos } = this.props;
    return props.todos.map((todo, i) => {
      console.log(todo);
      console.log("TODOD", props.todos);
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
