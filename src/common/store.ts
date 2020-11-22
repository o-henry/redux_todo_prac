import { combineReducers } from "@reduxjs/toolkit";

import { todoSlice } from "containers/todo/feature";

export const rootReducer = combineReducers({
  todos: todoSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
