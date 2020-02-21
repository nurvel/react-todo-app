import React from "react";
import { connect } from "react-redux";

import {
  toggleShowImportant,
  toggleShowDone
} from "../store/filter/filterReducer";

const Filter = props => {
  return (
    <div>
      <h3>Filter todos</h3>
      <div>
        <button onClick={() => props.toggleShowImportant(props.filter)}>
          {(!props.filter.showImportant).toString()}
        </button>{" "}
        Show only important
        <br />
        <button onClick={() => props.toggleShowDone(props.filter)}>
          {props.filter.showDone.toString()}
        </button>{" "}
        Show done
        <br />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("Filters state", state);
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = {
  toggleShowImportant,
  toggleShowDone
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
