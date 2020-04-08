import React from "react";

import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import FilterHandle from "./components/FilterHandle/FilterHandle";
import { Filter } from "./store/filter/filterType";
import { Todo } from "./store/todos/todoType";
import {
  toggleShowDone,
  toggleShowImportant,
} from "./store/filter/filterActions";
import { AppState, AppActions } from "./store";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

type AppProps = LinkStateProps & LinkDispatchProps;

const App = (props: AppProps) => {
  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <FilterHandle
        filter={props.filter}
        toggleShowImportant={props.toggleShowImportant}
        toggleShowDone={props.toggleShowDone}
      />
      <TodoList />
    </div>
  );
};

interface LinkStateProps {
  filter: Filter;
  todos: Todo[];
}

interface LinkDispatchProps {
  toggleShowImportant: () => void;
  toggleShowDone: () => void;
}

const mapStateToProps = (state: AppState) => {
  return {
    filter: state.filter,
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  toggleShowImportant: bindActionCreators(toggleShowImportant, dispatch),
  toggleShowDone: bindActionCreators(toggleShowDone, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
