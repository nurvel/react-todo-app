import { Action } from "redux";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";
import { AppState } from "..";
import { AppActions } from "../actions";
import { todoEpic } from "./todoEpics";

export interface EpicDependencies {}

// Types?
export const appEpic = combineEpics(todoEpic);


// const epicDependencies: EpicDependencies = {};

// export const rootEpic = combineEpics(loadTodosEpic);

// export const configureEpic = (dependencies = {}) =>  {
//   createEpicMiddleware({
//     dependencies: {
//       ...epicDependencies,
//       ...dependencies, // for testing inject external dependencies
//     },
//   });
// };
