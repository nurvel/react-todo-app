export interface Filter {
  showImportant: boolean;
  showDone: boolean;
}

export const SET_FILTER = "SET_FILTER";

export interface setFilter {
  type: typeof SET_FILTER;
  filter: Filter;
}

export type FilterActionTypes = setFilter; // | setDone;
