import React from "react";
import { TodoFilter } from "../store/filter/todoFilterType";

interface FilterProps {
  todoFilter: TodoFilter;
  toggleShowImportant: () => void;
  toggleShowDone: () => void;
}

interface FilterState {}

export const Filter = (props: FilterProps) => {
  const { toggleShowImportant, toggleShowDone, todoFilter } = props;

  return (
    <div>
      <h3>Filter todos</h3>
      <div>
        <button onClick={() => toggleShowImportant()}>
          {(!todoFilter.showImportant).toString()}
        </button>{" "}
        Show only important
        <br />
        <button onClick={() => toggleShowDone()}>
          {todoFilter.showDone.toString()}
        </button>{" "}
        Show done
        <br />
      </div>
    </div>
  );
};
