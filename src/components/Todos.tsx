import React, { useEffect } from "react";
import { TodoFilter } from "../store/reducers/todoFilterReducer";
import { Todo } from "../store/reducers/todoReducer";

export interface TodosAttrs {
  todos: Todo[];
  todoFilter: TodoFilter;
}
export interface TodosDispatchers {
  loadTodos: () => void;
  removeTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
}

export type TodosProps = TodosAttrs & TodosDispatchers;

export const Todos = (props: TodosProps) => {
  const { todos, todoFilter, loadTodos, removeTodo, updateTodo } = props;

  useEffect(() => {
    loadTodos(); // käyttää reduxin kautta actionia, joka lataa todot App:n propseisin
  }, []);

  const todosToShow = filterTodos(todos, todoFilter);

  const toggleImportant = (todo: Todo): void => {
    const updatedTodo: Todo = { ...todo, important: !todo.important };
    updateTodo(updatedTodo);
  };

  const toggleDone = (todo: Todo): void => {
    const updatedTodo: Todo = { ...todo, important: !todo.done };
    updateTodo(updatedTodo);
  };

  // renderöi todo-rivit propseina annetun datan pohjalta
  const maketodoRows = () => {
    return todosToShow.map((todo: Todo, i: number) => {
      return (
        <tr
          key={i}
          id={i.toString()}
          style={todo.done ? { textDecoration: "line-through" } : undefined}
        >
          <td>{i}</td>
          <td onClick={() => toggleImportant(todo)}>{todo.content}</td>
          <td>
            <button onClick={() => toggleDone(todo)}>
              {todo.important.toString()}
            </button>
          </td>
          <td>
            <button onClick={() => removeTodo(todo)}> delete</button>
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

const filterTodos = (
  todos: Todo[],
  todoFilter: { showImportant: any; showDone: any }
): Todo[] => {
  const filterConstaints = (todo: Todo) => {
    if (!todoFilter.showImportant && !todo.important) return false;
    if (!todoFilter.showDone && todo.done) return false;
    return true;
  };
  return todos.filter(filterConstaints);
};
