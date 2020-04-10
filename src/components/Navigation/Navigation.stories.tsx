import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Navigation from "./Navigation";
//import { NavigationAttributes } from "../Settings/Settings";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Navigation",
  decorators: [withKnobs],
};

// const getProps = () => {
//   const props: NavigationAttributes = {
//     createNewTodo: () => {},
//   };
//   return props;
// };

export const navigation = () => (
  <Router>
    <Navigation />
  </Router>
);
