import React, { useEffect } from "react";

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
import { connect, useDispatch } from "react-redux";
import {
  loadTodos,
  updateTodoDone,
  updateTodoImportant,
  removeTodo,
  createNewTodo,
} from "./store/todos/todoActions";

type AppProps = LinkStateProps & LinkDispatchProps;

const App = (props: AppProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo
        createNewTodo={createNewTodo}
      />
      <FilterHandle
        filter={props.filter}
        toggleShowImportant={props.toggleShowImportant}
        toggleShowDone={props.toggleShowDone}
      />
      <TodoList
        todos={props.todos}
        filter={props.filter} // TODO: extract filtering from TodoList component?
        removeTodo={props.removeTodo}
        updateTodoDone={props.updateTodoDone}
        updateTodoImportant={props.updateTodoImportant}
      />
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
  loadTodos: () => void;
  removeTodo: (todo: Todo) => void;
  updateTodoDone: (todo: Todo) => void;
  updateTodoImportant: (todo: Todo) => void;
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
  loadTodos: bindActionCreators(loadTodos, dispatch),
  updateTodoDone: bindActionCreators(updateTodoDone, dispatch),
  updateTodoImportant: bindActionCreators(updateTodoImportant, dispatch),
  removeTodo: bindActionCreators(removeTodo, dispatch),
  createNewTodo: bindActionCreators(createNewTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
