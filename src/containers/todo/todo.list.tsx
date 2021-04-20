import React from "react";
import { useDispatch } from "react-redux";

import { todoSlice, ITodo } from "./feature";
import { Input } from "components";

interface Props {
  todos: ITodo[];
}

function TodoList({ todos }: Props) {
  const dispatch = useDispatch();

  const handleCheckBox = (item: ITodo) => {
    dispatch(todoSlice.actions.TOGGLE(item));
  };

  return (
    <>
      {todos.map((item: ITodo) => (
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
