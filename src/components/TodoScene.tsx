import React from "react";
import { TodoFilter } from "../store/filter/todoFilterType";
import { Filter } from "./Filter";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

export interface TodoSceneAttrs {
  todoFilter: TodoFilter;
  toggleShowImportant: () => void;
  toggleShowDone: () => void;
}

export type TodoSceneProps = TodoSceneAttrs;

const TodoScene = (props: TodoSceneProps) => {
  const { toggleShowImportant, toggleShowDone, todoFilter } = props;

  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <Filter
        toggleShowImportant={toggleShowImportant}
        toggleShowDone={toggleShowDone}
        todoFilter={todoFilter}
      />
      <Todos />
    </div>
  );
};

export default TodoScene;
