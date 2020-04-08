import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import NewTodo from "./NewTodo";
import { NewTodoAttributes } from "./NewTodo";

export default {
  title: "NewTodo",
  decorators: [withKnobs],
};

const getProps = () => {
  const props: NewTodoAttributes = {
    createNewTodo: () => {},
  };

  return props;
};

export const Basic = () => {
  const props = getProps();
  return <NewTodo {...props} />;
};
