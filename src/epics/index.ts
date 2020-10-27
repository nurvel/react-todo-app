import { combineEpics, createEpicMiddleware } from "redux-observable";
import { loadTodosEpic } from "./todoEpics";

export const rootEpic = combineEpics(loadTodosEpic);

export default createEpicMiddleware();
