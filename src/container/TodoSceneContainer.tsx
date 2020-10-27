import React from "react";
import { connect } from "react-redux";
import TodoScene, { TodoSceneAttrs, TodoSceneDispachers } from "../components/TodoScene";
import { AppActions, AppState } from "../store";
import {
  toggleShowDone,
  toggleShowImportant,
} from "../store/filter/todoFilterActions";
import {
  loadTodos,
  removeTodo,
  updateTodo,
} from "../store/todos/todoActions";
import { Todo } from "../store/todos/todoType";

const mapStateToProps = (state: AppState): TodoSceneAttrs => {
  return {
    todoFilter: state.filter,
    todos: state.todoState.todos
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
});

export const TodoSceneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoScene);