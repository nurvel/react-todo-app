import React from "react";
import { Todo } from "../../store/todos/todoType";

export interface TodoItemAttributes {
  todo: Todo;
  removeTodo: (todo: Todo) => void;
  updateTodoDone: (todo: Todo) => void;
  updateTodoImportant: (todo: Todo) => void;
}
type TodoItemProps = TodoItemAttributes;

const TodoItem = ({
  todo,
  removeTodo,
  updateTodoDone,
  updateTodoImportant,
}: TodoItemProps) => {
  return (
    <tr
      key={todo.id}
      id={todo.id?.toString()}
      style={todo.done ? { textDecoration: "line-through" } : undefined}
    >
      <td>{todo.id}</td>
      <td onClick={() => updateTodoDone(todo)}>{todo.content}</td>
      <td>
        <button onClick={() => updateTodoImportant(todo)}>
          {todo.important.toString()}
        </button>
      </td>
      <td>
        <button onClick={() => removeTodo(todo)}> delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
