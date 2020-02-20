import React from "react";
// import { connect } from "react-redux";

const NewNote = props => {
  return (
    <form onSubmit={null}>
      <input name="todo" />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewNote;
