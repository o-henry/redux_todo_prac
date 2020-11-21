import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { actions } from "./feature";
import { Button } from "components";

function AddTodo() {
  const dispatch = useDispatch();
  const [iptTxt, setIptTxt] = useState("");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setIptTxt(e.target.value);
  };

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("input", iptTxt);

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
      <input
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
