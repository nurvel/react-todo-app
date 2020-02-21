import React from "react";
// import { connect } from "react-redux";

const Filter = props => {
  const toggleShowingImportant = () => {
    props.setFilter({
      ...props.filter,
      showImportant: !props.filter.showImportant
    });
  };

  const toggleShowingDone = () => {
    props.setFilter({
      ...props.filter,
      showDone: !props.filter.showDone
    });
  };

  return (
    <div>
      <h2>What do you want to see</h2>
      <div>
        <button onClick={toggleShowingImportant}>
          {props.filter.showImportant.toString()}
        </button>{" "}
        Show important
        <br />
        <button onClick={toggleShowingDone}>
          {props.filter.showDone.toString()}
        </button>{" "}
        Show done
        <br />
      </div>
    </div>
  );
};

export default Filter;
