import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { actions } from "./feature";
import { Button, Input } from "components";

function AddTodo() {
  const [iptTxt, setIptTxt] = useState("");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setIptTxt(e.target.value);
  };

  const dispatch = useDispatch();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    iptTxt &&
      dispatch(
        actions.addTodo({
          text: iptTxt,
          completed: false,
        })
      );

    setIptTxt("");
  };

  return (
    <>
      <Input
        type="text"
        onChange={handleText}
        value={iptTxt}
        placeholder="아무거나 입력해주세요."
      />
      <Button onClick={handleClick}>ADD TODO</Button>
    </>
  );
}

export default AddTodo;
