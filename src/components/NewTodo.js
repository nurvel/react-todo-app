import React from "react";
import { connect } from "react-redux";

import { createNewTodo } from "../store/todos/todoReducer";

//import { addTodo } from "../services/todoService";

const NewTodo = props => {
  const handleNewTodo = event => {
    event.preventDefault();
    const todoItem = {
      content: event.target.todo.value,
      done: false,
      important: event.target.important.checked
    };
    // const savedTodo = await addTodo(todoItem);
    // props.setTodos([...props.todos, savedTodo]);
    props.createNewTodo(todoItem);
    document.getElementById("todoForm").reset();
  };

  return (
    <div>
      <h3>New todo</h3>
      <form id="todoForm" onSubmit={handleNewTodo}>
        What you gotta do? <input name="todo" />
        Is it important? <input type="checkbox" name="important" />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createNewTodo
};

export default connect(null, mapDispatchToProps)(NewTodo);

// export default NewNote;
