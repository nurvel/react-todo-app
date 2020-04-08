import React from "react";
import { withKnobs, select, radios } from "@storybook/addon-knobs";
import { getTodoData } from "../../common/index";
import TodoList from "./TodoList";
import { TodoListAttributes } from "./TodoList";
// import { SelectTypeOptionsProp } from "@storybook/addon-knobs/dist/components/types";

export default {
  title: "Todo List Component",
  decorators: [withKnobs],
};

const todoData = getTodoData();

const todosOptions = {
  withoutTodos: undefined,
  withTodos: todoData,
};

const filterOptions = {
  true: true,
  false: false,
};

// const helloOptions: SelectTypeOptionsProp = ["Moikka", "Heippa"];

// export const TodoListWithoutProps = () => <TodoList />;

export const PersonListWithKnobs = () => {
  const todos = select("Todo data", todosOptions, todosOptions.withTodos);

  const showImportant = radios("Show important", filterOptions, true);
  const showDone = radios("Show done", filterOptions, true);
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

  return <TodoList {...props} />;
};
