import { TodoFilter, SET_TODOFILTER } from "./todoFilterType";
import { AppActions, AppState } from "../index";
import { Dispatch } from "redux";

export const setFilter = (filter: TodoFilter): AppActions => ({
  type: SET_TODOFILTER,
  filter
});

export const toggleShowImportant = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const currentFilter = getState().filter;
    const newFilter: TodoFilter = {
      ...currentFilter,
      showImportant: !currentFilter.showImportant
    };
    dispatch(setFilter(newFilter));
  };
};

export const toggleShowDone = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const currentFilter = getState().filter;
    const newFilter: TodoFilter = {
      ...currentFilter,
      showDone: !currentFilter.showDone
    };
    dispatch(setFilter(newFilter));
  };
};
