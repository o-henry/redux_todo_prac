import React from "react";

import AddTodo from "./todo.add";
import FilterTodo from "./todo.filter";

function TodoView() {
  return (
    <>
      <AddTodo />
      <FilterTodo />
    </>
  );
}

export default TodoView;
