import React from "react";
import { TodoFilter } from "../store/reducers/todoFilterReducer";

export interface FilterAttrs {
  /** Filter for important and done  */
  todoFilter: TodoFilter;
}

export interface FilterDispatchers {
  toggleShowImportant: () => void;
  toggleShowDone: () => void;
}

export type FilterProps = FilterAttrs & FilterDispatchers;

// interface FilterState {}

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
