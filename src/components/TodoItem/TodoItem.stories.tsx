import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { getTodoData } from "../../common/index";
import TodoItem from "./TodoItem";
import { TodoItemAttributes } from "./TodoItem";

export default {
  title: "TodoItem Component",
  decorators: [withKnobs],
};

const todoData = getTodoData();


const getProps = () => {
  const todo = todoData[0];

  const props: TodoItemAttributes = {
    todo,
    removeTodo: () => {},
    updateTodoDone: () => {},
    updateTodoImportant: () => {},
  };

  return props;
};

export const Basic = () => {
  const props = getProps();
  return <TodoItem {...props} />;
};
