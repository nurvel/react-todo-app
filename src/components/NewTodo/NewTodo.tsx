import React from "react";
import { Todo } from "../../store/todos/todoType";

interface NewTodoAttributes {
  createNewTodo: (todo: Todo) => void;
}

type NewTodoProps = NewTodoAttributes;

const NewTodo = (props: NewTodoProps) => {
  const handleNewTodo = (event: any) => {
    event.preventDefault();
    const todoItem: Todo = {
      content: event.target.todo.value,
      done: false,
      important: event.target.important.checked,
    };
    props.createNewTodo(todoItem);

    // TODO: Formin resetointi ei toimi näin typeScriptillä
    //document.getElementById("todoForm").reset();
  };

  return (
    <div>
      <h3>New todo</h3>
      <form id="todoForm" onSubmit={handleNewTodo}>
        What you gotta do? <input id="nameField" name="todo" /> <br />
        Check if important <input type="checkbox" name="important" /> <br />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default NewTodo;