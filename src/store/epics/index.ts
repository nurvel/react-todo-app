import { combineEpics, createEpicMiddleware } from "redux-observable";
import { loadTodosEpic } from "./todoEpics";

export interface EpicDependencies {}

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
