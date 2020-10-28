import React from "react";
import { TodoFilterState } from "../store/reducers/todoFilterReducer";
import { Todo } from "../store/reducers/todoReducer";
import { Filter } from "./Filter";
import { NewTodo } from "./NewTodo";
import { Todos } from "./Todos";

export type TodoSceneAttrs = {
  todoFilter: TodoFilterState;
  todos: Todo[];
};

export type TodoSceneDispachers = {
  toggleShowImportant: () => void;
  toggleShowDone: () => void;
  loadTodos: () => void;
  removeTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  addTodo: (todo: Todo) => void;
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
    addTodo
  } = props;

  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo createNewTodo={addTodo} />
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
