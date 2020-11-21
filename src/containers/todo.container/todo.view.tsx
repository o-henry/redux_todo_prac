import React from "react";

import AddTodo from "./todo.add";
import FilterTodo from "./todo.filter";
import TodoList from "./todo.list";

function TodoView() {
  return (
    <>
      <AddTodo />
      <TodoList />
      <FilterTodo />
    </>
  );
}

export default TodoView;
