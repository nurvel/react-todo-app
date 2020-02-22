import React from "react";
import { connect } from "react-redux";

import {
  removeTodo,
  updateTodoImportant,
  updateTodoDone,
  loadTodos
} from "../store/todos/todoActions";
import { Todo } from "../store/todos/todoType";
import { AppState, AppActions } from "../store/index";
import { Dispatch, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

/// ei käytössä, koska komponentilla ei ole omia propseja
interface TodosProps {}
interface TodosState {}
type Props = TodosProps & LinkStateProps & LinkDispatchProps;

const Todos = (props: Props) => {
  // renderöi todo-rivit propseina annetun datan pohjalta
  const maketodoRows = () => {
    return props.todos.map((todo: Todo, i: number) => {
      return (
        <tr
          key={i}
          id={i.toString()}
          style={todo.done ? { textDecoration: "line-through" } : undefined}
        >
          <td>{i}</td>
          <td onClick={() => props.updateTodoDone(todo)}>{todo.content}</td>
          <td>
            <button onClick={() => props.updateTodoImportant(todo)}>
              {todo.important.toString()}
            </button>
          </td>
          <td>
            <button onClick={() => props.removeTodo(todo)}> delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h3>Your todos</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo (click to set done)</th>
            <th>Important</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{maketodoRows()}</tbody>
      </table>
    </div>
  );
};

// interfacet määrittää paluuarvot
interface LinkStateProps {
  todos: Todo[];
  filter: Filter; // TODO
}
interface LinkDispatchProps {
  loadTodos: () => void;
  removeTodo: (todo: Todo) => void;
  updateTodoDone: (todo: Todo) => void;
  updateTodoImportant: (todo: Todo) => void;
}

// TODO: Fileri
const todosToShow = (
  todos: Todo[],
  filter: { showImportant: any; showDone: any }
) => {
  const filterConstaints = (todo: Todo) => {
    if (!filter.showImportant && !todo.important) return false;
    if (!filter.showDone && todo.done) return false;
    return true;
  };

  return todos.filter(filterConstaints);
};

const mapStateToProps = (state: AppState, ownProps: TodosProps) => {
  return {
    todos: todosToShow(state.todos, state.filter),
    filter: state.filter // TODO
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: TodosProps
) => ({
  loadTodos: bindActionCreators(loadTodos, dispatch),
  updateTodoDone: bindActionCreators(updateTodoDone, dispatch),
  updateTodoImportant: bindActionCreators(updateTodoImportant, dispatch),
  removeTodo: bindActionCreators(removeTodo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
