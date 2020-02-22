import { Filter, FilterActionTypes } from "./filterType";

const initialState: Filter = {
  showImportant: true,
  showDone: true
};

const reducer = (state = initialState, action: FilterActionTypes): Filter => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default reducer;
