import { TodoFilter, TodoFilterActionTypes } from "./todoFilterType";

const initialState: TodoFilter = {
  showImportant: true,
  showDone: true
};

const reducer = (state = initialState, action: TodoFilterActionTypes): TodoFilter => {
  switch (action.type) {
    case "SET_TODOFILTER":
      return action.filter;
    default:
      return state;
  }
};

export default reducer;
