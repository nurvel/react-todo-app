import { AppState } from "./index";
import { Todo } from "./todos/todoType";
import { Filter } from "./filter/filterType";

export const selectTodos = (state: AppState) => {
  const { todos, filter } = state;
  const filterConstraints = getFilterConstraints(filter);
  return todos.filter(filterConstraints);
};

const getFilterConstraints = (filter: Filter) => {
  // TODO: Add search to condition when filter state has search string
  return (todo: Todo) => {
    if (!filter.showImportant && !todo.important) return false;
    if (!filter.showDone && todo.done) return false;
    return true;
  };
};
