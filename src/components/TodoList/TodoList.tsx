import React from "react";
import { Todo } from "../../store/todos/todoType";
import TodoItem from "../TodoItem/TodoItem";

export interface TodoListAttributes {
  todos: Todo[];
  removeTodo: (todo: Todo) => void;
  updateTodoDone: (todo: Todo) => void;
  updateTodoImportant: (todo: Todo) => void;
}
type TodosProps = TodoListAttributes;

const TodoList = (props: TodosProps) => {

  const maketodoRows = () => {
    if (props.todos.length === 0) return null;

    return props.todos.map((todo: Todo, i: number) => {
      return (
        <TodoItem
          todo={todo}
          removeTodo={props.removeTodo}
          updateTodoDone={props.updateTodoDone}
          updateTodoImportant={props.updateTodoImportant}
        />
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

export default TodoList;
