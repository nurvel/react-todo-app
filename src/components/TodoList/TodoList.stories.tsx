import React from "react";
import { withKnobs, select, radios, text } from "@storybook/addon-knobs";
import { getTodoData } from "../../common/index";
import TodoList from "./TodoList";
import { TodoListAttributes } from "./TodoList";
// import { SelectTypeOptionsProp } from "@storybook/addon-knobs/dist/components/types";

export default {
  title: "Todo List Story",
  decorators: [withKnobs],
};

const todoData = getTodoData();

const todosOptions = {
  withoutTodos: undefined,
  withTodos: todoData,
};

// const helloOptions: SelectTypeOptionsProp = ["Moikka", "Heippa"];

// export const TodoListWithoutProps = () => <TodoList />;

export const PersonListWithKnobs = () => {
  const todos = select("Todo data", todosOptions, todosOptions.withTodos);

  const props: TodoListAttributes = {
    todos,
    loadTodos: () => {},
    removeTodo: () => {},
    updateTodoDone: () => {},
    updateTodoImportant: () => {},
  };

  return <TodoList {...props} />;
};
