import React from "react";
import { TodoFilter } from "../store/filter/todoFilterType";
import { Todo } from "../store/todos/todoType";
import { Filter } from "./Filter";
import NewTodo from "./NewTodo";
import { Todos } from "./Todos";

export type TodoSceneAttrs = {
  todoFilter: TodoFilter;
  todos: Todo[];
};

export type TodoSceneDispachers = {
  toggleShowImportant: () => void;
  toggleShowDone: () => void;
  loadTodos: () => void;
  removeTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
};

export type TodoSceneProps = TodoSceneAttrs & TodoSceneDispachers;

const TodoScene = (props: TodoSceneProps) => {
  const {
    toggleShowImportant,
    toggleShowDone,
    todoFilter,
    todos,
    loadTodos,
    removeTodo,
    updateTodo,
  } = props;

  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <Filter
        toggleShowImportant={toggleShowImportant}
        toggleShowDone={toggleShowDone}
        todoFilter={todoFilter}
      />
      <Todos
        todos={todos}
        todoFilter={todoFilter}
        loadTodos={loadTodos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoScene;
