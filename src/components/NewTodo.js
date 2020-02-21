import React from "react";
import { addTodo } from "../services/todoService";

const NewNote = props => {
  const handleNewTodo = async event => {
    event.preventDefault();
    const todoItem = {
      content: event.target.todo.value,
      important: event.target.important.checked
    };
    await addTodo(todoItem);
    document.getElementById("todoForm").reset();
    props.refreshTodos();
  };

  return (
    <form id="todoForm" onSubmit={handleNewTodo}>
      What you gotta do? <input name="todo" />
      Is it important? <input type="checkbox" name="important" />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewNote;
