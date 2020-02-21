import React from "react";
import { addTodo } from "../services/todoService";

const NewNote = props => {
  const handleNewTodo = async event => {
    event.preventDefault();
    const todoItem = {
      content: event.target.todo.value,
      done: false,
      important: event.target.important.checked
    };
    const savedTodo = await addTodo(todoItem);
    document.getElementById("todoForm").reset();
    props.setTodos([...props.todos, savedTodo]);
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

export default NewNote;
