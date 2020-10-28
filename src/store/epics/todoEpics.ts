import {
  ActionsObservable,
  Epic,
  StateObservable,
  combineEpics,
} from "redux-observable";
import { AppState } from "../index";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { from, of } from "rxjs";
import { TodoActionTypes, TypeKeys } from "../actions";
import { getTodosPromise } from "../../services/todoService";
import { loadTodosFulfilled, loadTodosFailed } from "../actions/todoActions";
import { EpicDependencies } from ".";

export const loadTodosEpic: Epic<
  TodoActionTypes,
  TodoActionTypes,
  any,
  EpicDependencies
> = (
  action$: ActionsObservable<TodoActionTypes>,
  state$: StateObservable<AppState>,
  epicDependencies: EpicDependencies
) => {
  return action$.ofType(TypeKeys.LOAD_TODOS).pipe(
    tap((action) => console.log(action)),
    mergeMap((actions) =>
      from(getTodosPromise()).pipe(
        map(loadTodosFulfilled),
        catchError((error) => {
          // console.log("Here is your error: ", error);
          return of(loadTodosFailed());
        })
      )
    )
  );
};

// export const addTodoEpic

// TODO: Not workign with types
export const todoEpic = () => combineEpics(loadTodosEpic);
