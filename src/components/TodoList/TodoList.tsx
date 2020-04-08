import React from "react";
import { Todo } from "../../store/todos/todoType";
import { Filter } from "../../store/filter/filterType";
import TodoItem from "../TodoItem/TodoItem";

export interface TodoListAttributes {
  todos: Todo[];
  filter?: Filter;
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
