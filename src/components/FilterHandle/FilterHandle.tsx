import React from "react";
import { Filter } from "../../store/filter/filterType";
import { Todo } from "../../store/todos/todoType";

interface FilterHandleAttributes {
  filter: Filter;
  toggleShowImportant: () => void;
  toggleShowDone: () => void;
}

type FilterHandleProps = FilterHandleAttributes;

const FilterHandle = (props: FilterHandleProps) => {
  return (
    <div>
      <h3>Filter todos</h3>
      <div>
        <button onClick={() => props.toggleShowImportant()}>
          {(!props.filter.showImportant).toString()}
        </button>{" "}
        Show only important
        <br />
        <button onClick={() => props.toggleShowDone()}>
          {props.filter.showDone.toString()}
        </button>{" "}
        Show done
        <br />
      </div>
    </div>
  );
};

export default FilterHandle;
