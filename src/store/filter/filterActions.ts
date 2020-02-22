import { Filter, SET_FILTER } from "./filterType";
import { AppActions, AppState } from "../index";
import { Dispatch } from "redux";

export const setFilter = (filter: Filter): AppActions => ({
  type: SET_FILTER,
  filter
});

export const toggleShowImportant = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const currentFilter = getState().filter;
    const newFilter: Filter = {
      ...currentFilter,
      showImportant: !currentFilter.showImportant
    };
    dispatch(setFilter(newFilter));
  };
};

export const toggleShowDone = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const currentFilter = getState().filter;
    const newFilter: Filter = {
      ...currentFilter,
      showDone: !currentFilter.showDone
    };
    dispatch(setFilter(newFilter));
  };
};
