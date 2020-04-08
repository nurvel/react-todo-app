import React from "react";
import { connect } from "react-redux";

import { createNewTodo } from "../../store/todos/todoActions";
import { Todo } from "../../store/todos/todoType";
import { AppActions } from "../../store/index";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

interface NewTodoProps {}
interface NewTodoState {}
type Props = NewTodoProps & LinkStateProps & LinkDispatchProps;

const NewTodo = (props: Props) => {
  const handleNewTodo = (event: any) => {
    event.preventDefault();
    const todoItem: Todo = {
      content: event.target.todo.value,
      done: false,
      important: event.target.important.checked,
    };
    props.createNewTodo(todoItem);

    // TODO: Formin resetointi ei toimi näin typeScriptillä
    //document.getElementById("todoForm").reset();
  };

  return (
    <div>
      <h3>New todo</h3>
      <form id="todoForm" onSubmit={handleNewTodo}>
        What you gotta do? <input id="nameField" name="todo" /> <br />
        Check if important <input type="checkbox" name="important" /> <br />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

interface LinkStateProps {}
interface LinkDispatchProps {
  createNewTodo: (todo: Todo) => void;
}

// provider
// const mapStateToProps = (state: AppState) => {
//   return { state: state };
// };

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: NewTodoProps
) => ({
  createNewTodo: bindActionCreators(createNewTodo, dispatch),
});

export default connect(null, mapDispatchToProps)(NewTodo);
