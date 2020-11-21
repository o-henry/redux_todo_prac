import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions, selectTodoList, ITodo } from "./feature";
import { RootState } from "common/store";
import { Input } from "components";

function TodoList() {
  const todoLists = useSelector<RootState, ITodo[]>((state) =>
    selectTodoList(state.todos)
  );

  const dispatch = useDispatch();

  const handleCheckBox = (item: ITodo) => {
    dispatch(actions.toggleTodo(item));
  };

  return (
    <>
      {todoLists.map((item: ITodo) => (
        <div key={item.id}>
          <span>
            <Input
              type="checkbox"
              checked={item.completed}
              onChange={handleCheckBox.bind({}, item)}
            />
            {item.text}
          </span>
        </div>
      ))}
    </>
  );
}

export default TodoList;
