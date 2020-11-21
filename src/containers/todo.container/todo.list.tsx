import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "common/store";
import { selectTodoList, ITodo } from "./feature";

function TodoList() {
  const todoLists = useSelector<RootState, ITodo[]>((state) =>
    selectTodoList(state.todos)
  );

  return (
    <ul>
      {todoLists.map((item: ITodo) => (
        <li key={item.id}>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
