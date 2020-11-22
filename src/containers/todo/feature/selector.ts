import { createSelector } from "@reduxjs/toolkit";

import ITodo, { TodoList } from "./type";

const selectTodoList = createSelector(
  (state: TodoList) => state.list,
  (list: ITodo[]) => list
);

export default selectTodoList;
