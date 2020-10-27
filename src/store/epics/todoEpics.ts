import { ActionsObservable, Epic, StateObservable } from "redux-observable";
import { AppState } from "../index";
import { Action } from "redux";
import { mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { dummyTodo, TodoActionTypes } from "../actions/todoActions";
import { TypeKeys } from "../actions";

export const loadTodosEpic: Epic<TodoActionTypes, Action, AppState> = (
  action$: ActionsObservable<TodoActionTypes>,
  state$: StateObservable<AppState>
) => {
  return action$.ofType(TypeKeys.LOAD_TODOS).pipe(
    mergeMap(() => {
      return of(dummyTodo());
    })
  );
};

// mergeMap(action$ =>
//     getTodos())
//     .pipe(
//         map(response => loadTodosFulfilled(response))
//     ))
