import { TodoFilter, TypeKeys } from "./todoFilterType";
import { AppActions } from "../index"; // AppState

export const setFilter = (filter: TodoFilter): AppActions => ({
  type: TypeKeys.SET_TODOFILTER,
  filter,
});

export const toggleShowImportant = (): AppActions => {
  return {
    type: TypeKeys.TODO_FILTER_TOGGLE_IMPORTANT,
  };
};

export const toggleShowDone = (): AppActions => {
  return {
    type: TypeKeys.TODO_FILTER_TOGGLE_DONE,
  };
};
