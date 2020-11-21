import React from "react";
import classNames from "classnames";

export interface Props {
  /* handle input type (text, radio ..) */
  type?: string;
  /* className에 따른 style */
  style?: string;
  /* 입력 값 */
  value?: string | number;
  /* placeholder 명명 */
  placeholder?: string;
  /* state handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /* state handler */
  onClick?: any;
  /* add bulma css framework */
  bulma?: string;
  /* story book */
  name?: any;
  /* check type ipnut */
  checked?: boolean;
}

function Input({ style, ...props }: Props): React.ReactElement {
  const { bulma } = props;

  return (
    <input
      autoComplete="off"
      className={classNames("Input", bulma, style)}
      {...props}
    />
  );
}

Input.defaultProps = {
  style: "",
  bulma: "",
  type: "text",
};

export default Input;
