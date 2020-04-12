import deepFreeze from "deep-freeze";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import todoReducer from "././todoReducer";
import {
  Todo,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SET_TODOS,
} from "./todoType";
import { AppActions } from "../index";
import { getTodoData } from "../../common";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Todo Reducer", () => {
  test("return new state with SET_TODOS", () => {
    const initialState: Todo[] = [];
    deepFreeze(initialState);

    const todos = getTodoData();
    const action: AppActions = {
      type: SET_TODOS,
      todos,
    };

    const newState = todoReducer(initialState, action);
    expect(newState).toEqual(action.todos);
  });

  test("return new state with ADD_TODOS", () => {
    const initialState: Todo[] = [];
    deepFreeze(initialState);

    const todo: Todo = getTodoData()[0];
    const action: AppActions = {
      type: ADD_TODO,
      todo,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0]).toEqual(action.todo);
    expect(newState.length).toBe(1);
  });

  test("return new state with DELETE_TODOS", () => {
    const initialState: Todo[] = getTodoData();
    deepFreeze(initialState);

    const todo: Todo = getTodoData()[0];
    const action: AppActions = {
      type: DELETE_TODO,
      todo,
    };

    const newState = todoReducer(initialState, action);
    expect(newState).not.toContain(todo);
    expect(newState.length).toBe(initialState.length - 1);
  });

  test("return new state with UPDATE_TODO", () => {
    const initialState: Todo[] = getTodoData();
    deepFreeze(initialState);

    const todo: Todo = getTodoData()[0];
    const updatedTodo = { ...todo, done: !todo.done };
    const action: AppActions = {
      type: UPDATE_TODO,
      todo: updatedTodo,
    };

    const newState = todoReducer(initialState, action);
    const todoFromNewState = newState.filter((t) => t.id === updatedTodo.id)[0]; // TODO: better data strcutore to get single todo via id
    expect(todoFromNewState).toEqual(updatedTodo);
  });
});

// describe("Filter action creators", () => {
//   let store: any;
//   beforeEach(() => {
//     const filter: Filter = {
//       showImportant: true,
//       showDone: true,
//     };
//     store = mockStore(filter);
//   });

//   // TODO: Not the best practice to dispach such a generic action
//   test("Creates filter to show important todos", () => {
//     store
//       .dispatch(toggleShowImportant())
//       .then(() => expect(store.getActions()).toContainEqual({ SET_FILTER }));
//   });

//   // TODO: Not the best practice to dispach such a generic action
//   test("Creates filter to show done todos", () => {
//     store
//       .dispatch(toggleShowDone())
//       .then(() => expect(store.getActions()).toContainEqual({ SET_FILTER }));
//   });
// });
