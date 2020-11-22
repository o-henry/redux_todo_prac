import React, { useState } from "react";
import { useSelector } from "react-redux";

import TodoList from "./todo.list";
import { Button } from "components";
import { RootState } from "common/store";
import { selectTodoList, ITodo } from "./feature";

function FilterTodo() {
  const [isComplete, setIsComplete] = useState(false);

  const todos = useSelector<RootState, ITodo[]>((state) => {
    const lists = state.todos.list;
    if (isComplete) {
      return lists.filter((ele) => ele.completed);
    }
    return selectTodoList(state.todos);
  });

  return (
    <>
      <TodoList todos={todos} />
      <Button onClick={() => setIsComplete(true)}>완료</Button>
      <Button onClick={() => setIsComplete(false)}>ALL</Button>
    </>
  );
}

export default FilterTodo;
