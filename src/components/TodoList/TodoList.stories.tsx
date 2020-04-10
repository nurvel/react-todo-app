import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { getTodoData } from "../../common/index";
import TodoList from "./TodoList";
import { TodoListAttributes } from "./TodoList";

export default {
  title: "TodoList",
  decorators: [withKnobs],
};

const todoData = getTodoData();

const todosOptions: any = {
  without_Todos: [],
  with_4_Todos: todoData,
};

const getProps = () => {
  const todos = select("Todo data", todosOptions, todosOptions.with_4_Todos);

  const showImportant = boolean("Show important", true);
  const showDone = boolean("Show done", true);
  const filter = {
    showImportant,
    showDone,
  };
  const props: TodoListAttributes = {
    todos,
    filter,
    removeTodo: () => {},
    updateTodoDone: () => {},
    updateTodoImportant: () => {},
  };

  return props;
};

export const WithDynamicKnobs = () => {
  const props = getProps();
  return <TodoList {...props} />;
};
