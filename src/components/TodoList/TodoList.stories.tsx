import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { getTodoData } from "../../common/index";
import TodoList from "./TodoList";
import { TodoListAttributes } from "./TodoList";

export default {
  title: "TodoList Component",
  decorators: [withKnobs],
};

const todoData = getTodoData();

const todosOptions: any = {
  withoutTodos: [],
  withTodos: todoData,
};

const getProps = () => {
  const todos = select("Todo data", todosOptions, todosOptions.withTodos);

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

// export const TodoListWithoutProps = () => <TodoList />;

export const WithDynamicKnobs = () => {
  const props = getProps();
  return <TodoList {...props} />;
};
