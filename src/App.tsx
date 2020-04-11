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
import { connect } from "react-redux";
import {
  loadTodos,
  updateTodoDone,
  updateTodoImportant,
  removeTodo,
  createNewTodo,
} from "./store/todos/todoActions";
import { selectTodos } from "./store/selectors";

type AppProps = LinkStateProps & LinkDispatchProps;

const App = (props: AppProps) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadTodos());
  // }, [dispatch]);

  const {
    loadTodos,
    createNewTodo,
    toggleShowImportant,
    toggleShowDone,
    removeTodo,
    updateTodoDone,
    updateTodoImportant,
    filter,
    todos,
  } = props;

  useEffect(() => {
    loadTodos(); // TODO: not using the method connected to dispatch?
  }, [loadTodos]);

  return (
    <div>
      <h1>Todo app</h1>
      <NewTodo createNewTodo={createNewTodo} />
      <FilterHandle
        filter={filter}
        toggleShowImportant={toggleShowImportant}
        toggleShowDone={toggleShowDone}
      />
      <TodoList
        todos={todos}
        // filter={filter} // TODO: extract filtering from TodoList component?
        removeTodo={removeTodo}
        updateTodoDone={updateTodoDone}
        updateTodoImportant={updateTodoImportant}
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
  createNewTodo: (todo: Todo) => void;
}

const mapStateToProps = (state: AppState) => {
  return {
    filter: state.filter,
    todos: selectTodos(state),
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
