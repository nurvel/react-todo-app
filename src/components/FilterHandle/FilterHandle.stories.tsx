import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import FilterHandle from "./FilterHandle";
import { FilterHandleAttributes } from "./FilterHandle";

export default {
  title: "FilterHandle",
  decorators: [withKnobs],
};

const getProps = () => {
  const showImportant = boolean("Show important", true);
  const showDone = boolean("Show done", true);
  const filter = {
    showImportant,
    showDone,
  };

  const props: FilterHandleAttributes = {
    filter,
    toggleShowImportant: () => {},
    toggleShowDone: () => {},
  };

  return props;
};

export const WithDynamicKnobs = () => {
  const props = getProps();
  return <FilterHandle {...props} />;
};