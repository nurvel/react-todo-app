import React from "react";
import { connect } from "react-redux";
import TodoScene from "../components/TodoScene";
import { AppActions, AppState } from "../store";
import {
  toggleShowDone,
  toggleShowImportant,
} from "../store/filter/todoFilterActions";
import { TodoFilter } from "../store/filter/todoFilterType";

interface LinkStateProps {
  todoFilter: TodoFilter;
}

interface LinkDispatchProps {
  toggleShowImportant: () => void;
  toggleShowDone: () => void;
}

const mapStateToProps = (state: AppState) => {
  return {
    todoFilter: state.filter,
  };
};

const mapDispatchToProps = (dispatch: React.Dispatch<AppActions>) => ({
  toggleShowImportant: () => dispatch(toggleShowImportant()),
  toggleShowDone: () => dispatch(toggleShowDone()),
});

export const TodoSceneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoScene);
