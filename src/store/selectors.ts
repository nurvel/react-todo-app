import { AppState } from "./index";
import { Todo } from "./todos/todoType";

export const selectTodos = (state: AppState) => {
  const { todos, filter } = state;

  const filterConstraints = (todo: Todo) => {
    if (!filter.showImportant && !todo.important) return false;
    if (!filter.showDone && todo.done) return false;
    return true;
  };

  return todos.filter(filterConstraints);
};
