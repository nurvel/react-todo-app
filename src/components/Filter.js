import React from "react";
import { useSelector, useDispatch } from "react-redux"; // korvaa connectin

import {
  toggleShowImportant,
  toggleShowDone
} from "../store/filter/filterActions";

const Filter = props => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Filter todos</h3>
      <div>
        <button onClick={() => dispatch(toggleShowImportant(filter))}>
          {(!filter.showImportant).toString()}
        </button>{" "}
        Show only important
        <br />
        <button onClick={() => dispatch(toggleShowDone(filter))}>
          {filter.showDone.toString()}
        </button>{" "}
        Show done
        <br />
      </div>
    </div>
  );
};

export default Filter;
