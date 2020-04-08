const todoTestData = require("../mocs/todo-test-data.json");


/* UTILS & GENERAL */
export interface Todo {
  content: string;
  done: boolean;
  important: boolean;
  id: number;
}

/* TESTDATA HANDLES */

export const getTodoData = (): Todo[] => {
  return todoTestData.todos;
};
