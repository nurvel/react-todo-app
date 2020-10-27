import { TypeKeys, TodoActionTypes, DummyTodo } from "../store/todos/todoType";
import { ActionsObservable, Epic, StateObservable } from "redux-observable";
import { AppState, AppActions } from "../store/index";
import { Action } from "redux";
import { mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { dummyTodo } from "../store/todos/todoActions";

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
