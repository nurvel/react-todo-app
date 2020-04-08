import React from "react";
import { withKnobs, radios } from "@storybook/addon-knobs";
import FilterHandle from "./FilterHandle";
import { FilterHandleAttributes } from "./FilterHandle";
// import { SelectTypeOptionsProp } from "@storybook/addon-knobs/dist/components/types";

export default {
  title: "Filter Handle Component",
  decorators: [withKnobs],
};

const filterOptions = {
  true: true,
  false: false,
};

// const helloOptions: SelectTypeOptionsProp = ["Moikka", "Heippa"];
// export const TodoListWithoutProps = () => <TodoList />;

export const FilterHandleWithKnobs = () => {
  const showImportant = radios("Show important", filterOptions, true);
  const showDone = radios("Show done", filterOptions, true);
  const filter = {
    showImportant,
    showDone,
  };

  const props: FilterHandleAttributes = {
    filter,
    toggleShowImportant: () => {},
    toggleShowDone: () => {}
  };

  return <FilterHandle {...props} />;
};
