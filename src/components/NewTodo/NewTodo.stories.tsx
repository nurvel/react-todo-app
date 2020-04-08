import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import NewTodo from "./NewTodo";
import { NewTodoAttributes } from "./NewTodo";

export default {
  title: "NewTodo Component",
  decorators: [withKnobs],
};

const getProps = () => {
  const props: NewTodoAttributes = {
    createNewTodo: () => {},
  };

  return props;
};

// export const TodoListWithoutProps = () => <TodoList />;

export const WithDynamicKnobs = () => {
  const props = getProps();
  return <NewTodo {...props} />;
};
