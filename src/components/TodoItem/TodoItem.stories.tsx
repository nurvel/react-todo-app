import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { getTodoData } from "../../common/index";
import TodoItem from "./TodoItem";
import { TodoItemAttributes } from "./TodoItem";

export default {
  title: "TodoItem",
  decorators: [withKnobs],
};

enum testTodo {
  IMPORTANT_DONE = 0,
  IMPORTANT_NON_DONE = 1,
  NON_IMPORTANT_NON_DONE = 2,
  NON_IMPORTANT_DONE = 3,
}

const todoData = getTodoData();

const getProps = (index: number) => {
  const todo = todoData[index];

  const props: TodoItemAttributes = {
    todo,
    removeTodo: () => {},
    updateTodoDone: () => {},
    updateTodoImportant: () => {},
  };

  return props;
};

export const TodoImportant = () => {
  const props = getProps(testTodo.IMPORTANT_NON_DONE);
  return <TodoItem {...props} />;
};

export const TodoDone = () => {
  const props = getProps(testTodo.NON_IMPORTANT_DONE);
  return <TodoItem {...props} />;
};
