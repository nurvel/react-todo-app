import React from "react";
import { Todo } from "../../store/todos/todoType";
import { Filter } from "../../store/filter/filterType";
import TodoListStories from "./TodoList.stories";

export interface TodoListAttributes {
  todos: Todo[];
  filter?: Filter;
  loadTodos: () => void;
  removeTodo: (todo: Todo) => void;
  updateTodoDone: (todo: Todo) => void;
  updateTodoImportant: (todo: Todo) => void;
}
type TodosProps = TodoListAttributes;

const TodoList = (props: TodosProps) => {
  const todosToShow = (
    todos: Todo[],
    filter: { showImportant: any; showDone: any }
  ) => {
    const filterConstaints = (todo: Todo) => {
      if (!filter.showImportant && !todo.important) return false;
      if (!filter.showDone && todo.done) return false;
      return true;
    };

    return todos.filter(filterConstaints);
  };

  const maketodoRows = () => {
    if (props.todos.length === 0) return null;

    const filteredTodos = props.filter
      ? todosToShow(props.todos, props.filter)
      : props.todos;

    return filteredTodos.map((todo: Todo, i: number) => {
      return (
        <tr
          key={i}
          id={i.toString()}
          style={todo.done ? { textDecoration: "line-through" } : undefined}
        >
          <td>{i}</td>
          <td onClick={() => props.updateTodoDone(todo)}>{todo.content}</td>
          <td>
            <button onClick={() => props.updateTodoImportant(todo)}>
              {todo.important.toString()}
            </button>
          </td>
          <td>
            <button onClick={() => props.removeTodo(todo)}> delete</button>
          </td>
        </tr>
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
