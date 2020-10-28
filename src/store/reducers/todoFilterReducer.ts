import { TypeKeys } from "../actions";
import { TodoFilterActionTypes } from "../actions/todoFilterActions";


export interface TodoFilterState {
  showImportant: boolean;
  showDone: boolean;
}

const initialState: TodoFilterState = {
  showImportant: true,
  showDone: true,
};

const reducer = (
  state = initialState,
  action: TodoFilterActionTypes
): TodoFilterState => {
  switch (action.type) {
    case TypeKeys.SET_TODOFILTER:
      return {
        ...state,
        ...action.filter,
      };
    case TypeKeys.TODO_FILTER_TOGGLE_IMPORTANT:
      return {
        ...state,
        showImportant: !state.showImportant,
      };
    case TypeKeys.TODO_FILTER_TOGGLE_DONE:
      return {
        ...state,
        showDone: !state.showDone,
      };
    default:
      return state;
  }
};

export default reducer;
