import { ActionsObservable, Epic, StateObservable } from "redux-observable";
import { AppState } from "../index";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { from, of } from "rxjs";
import { TodoActionTypes, TypeKeys } from "../actions";
import { getTodos, getTodosPromise } from "../../services/todoService";
import { loadTodosFulfilled } from "../actions/todoActions";
import { Todo } from "../reducers/todoReducer";

export const loadTodosEpic: Epic<TodoActionTypes, TodoActionTypes, any> = (
  action$: ActionsObservable<TodoActionTypes>,
  state$: StateObservable<AppState>
) => {
  return action$.ofType(TypeKeys.LOAD_TODOS).pipe(
    tap((action) => console.log(action)),
    mergeMap(
      (actions) => from(getTodosPromise()).pipe(map(loadTodosFulfilled))
      // catchError((error) => of())
    )
  );
};

// mergeMap(action$ =>
//     getTodos())
//     .pipe(
//         map(response => loadTodosFulfilled(response))
//     ))
