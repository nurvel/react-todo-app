import deepFreeze from "deep-freeze";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import filterReducer from "./filterReducer";
import { Filter, SET_FILTER } from "./filterType";
import { AppActions, AppState } from "../index";
import { Dispatch } from "redux";
import { toggleShowImportant, toggleShowDone } from "./filterActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Filter Reducer", () => {
  test("return new state with action SET_FILTER", () => {
    const initialState: Filter = {
      showImportant: true,
      showDone: true,
    };
    deepFreeze(initialState);

    const filter: Filter = {
      showImportant: false,
      showDone: false,
    };

    const action: AppActions = {
      type: SET_FILTER,
      filter: filter,
    };

    const newState = filterReducer(initialState, action);
    expect(newState).toEqual(action.filter);
  });
});

describe("Filter action creators", () => {
  let store: any;
  beforeEach(() => {
    const filter: Filter = {
      showImportant: true,
      showDone: true,
    };
    store = mockStore(filter);
  });

  // TODO: Not the best practice to dispach such a generic action
  test("Creates filter to show important todos", () => {
    store
      .dispatch(toggleShowImportant())
      .then(() => expect(store.getActions()).toContainEqual({ SET_FILTER }));
  });

  // TODO: Not the best practice to dispach such a generic action
  test("Creates filter to show done todos", () => {
    store
      .dispatch(toggleShowDone())
      .then(() => expect(store.getActions()).toContainEqual({ SET_FILTER }));
  });
});
