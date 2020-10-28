import {
  ActionsObservable,
  Epic,
  StateObservable,
  combineEpics,
} from "redux-observable";
import { AppState } from "../index";
import { catchError, map, mergeMap } from "rxjs/operators";
import { from, of } from "rxjs";
import { TypeKeys } from "../actions";
import {
  addTodo,
  getTodosPromise,
  updateTodo,
} from "../../services/todoService";
import {
  loadTodosFulfilled,
  loadTodosFailed,
  addTodoFulfilled,
  addTodoFailed,
  updateTodoFulfilled,
  removeTodoFulfilled,
  updateTodoFailed,
  removeTodoFailed,
} from "../actions/todoActions";
import { EpicDependencies } from ".";
import { AppActions } from "../actions/index";
import { Action, AnyAction } from "redux";
import { deleteTodo } from "../../services/todoService";

const loadTodosEpic: Epic<AppActions, Action, any, EpicDependencies> = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<AppState>,
  epicDependencies: EpicDependencies
) => {
  return action$.ofType(TypeKeys.LOAD_TODOS).pipe(
    mergeMap((action) =>
      from(getTodosPromise()).pipe(
        map(loadTodosFulfilled),
        catchError((error) => {
          return of(loadTodosFailed());
        })
      )
    )
  );
};

const addTodoEpic: Epic<AppActions, Action, any, EpicDependencies> = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<AppState>,
  epicDependencies: EpicDependencies
) => {
  return action$.ofType(TypeKeys.ADD_TODO).pipe(
    mergeMap((action) =>
      from(addTodo(action.todo)).pipe(
        map(addTodoFulfilled),
        catchError((error) => {
          return of(addTodoFailed(action.Todo));
        })
      )
    )
  );
};

const updateTodoEpic: Epic<AppActions, Action, any, EpicDependencies> = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<AppState>,
  epicDependencies: EpicDependencies
) => {
  return action$.ofType(TypeKeys.UPDATE_TODO).pipe(
    mergeMap((action) =>
      from(updateTodo(action.todo)).pipe(
        map(() => updateTodoFulfilled(action.todo)),
        catchError((error) => {
          return of(updateTodoFailed(action.todo));
        })
      )
    )
  );
};

const deleteTodoEpic: Epic<AppActions, Action, any, EpicDependencies> = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<AppState>,
  epicDependencies: EpicDependencies
) => {
  return action$.ofType(TypeKeys.DELETE_TODO).pipe(
    mergeMap((action) =>
      from(deleteTodo(action.todo)).pipe(
        map(() => removeTodoFulfilled(action.todo)),
        catchError((error) => {
          return of(removeTodoFailed(action.todo));
        })
      )
    )
  );
};

export const todoEpic: Epic<
  AppActions,
  Action,
  any,
  EpicDependencies
> = combineEpics(loadTodosEpic, addTodoEpic, updateTodoEpic, deleteTodoEpic);
