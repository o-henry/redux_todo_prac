import React from "react";

import AddTodo from "./todo.add";
import TodoList from "./todo.list";

function TodoView() {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default TodoView;
