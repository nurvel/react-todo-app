import React from "react";
import { connect } from "react-redux";
import TodoScene, {
  TodoSceneAttrs,
  TodoSceneDispachers,
} from "../components/TodoScene";
import { AppState } from "../store";
import { AppActions } from "../store/actions";
import {
  loadTodos,
  removeTodo,
  updateTodo,
  addTodo,
} from "../store/actions/todoActions";
import {
  toggleShowDone,
  toggleShowImportant,
} from "../store/actions/todoFilterActions";
import { Todo } from "../store/reducers/todoReducer";

const mapStateToProps = (state: AppState): TodoSceneAttrs => {
  return {
    todoFilter: state.filter,
    todos: state.todoState.todos,
  };
};

const mapDispatchToProps = (
  dispatch: React.Dispatch<AppActions>
): TodoSceneDispachers => ({
  toggleShowImportant: () => dispatch(toggleShowImportant()),
  toggleShowDone: () => dispatch(toggleShowDone()),
  loadTodos: () => dispatch(loadTodos()),
  removeTodo: (todo: Todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo: Todo) => dispatch(updateTodo(todo)),
  addTodo: (todo: Todo) => dispatch(addTodo(todo)),
});

export const TodoSceneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoScene);
