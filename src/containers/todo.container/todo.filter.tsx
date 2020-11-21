import React from "react";
import { useSelector } from "react-redux";

import { Button } from "components";
import { RootState } from "common/store";
import { selectTodoList, ITodo } from "./feature";

function FilterTodo() {
  const filterLists = useSelector<RootState, ITodo[]>((state): any => {
    console.log("state", state);
  });

  console.log(filterLists);

  return (
    <>
      <Button>완료</Button>
      <Button>미완료</Button>
    </>
  );
}

export default FilterTodo;
