import React from "react";
import cn from "classnames";

type ButtonTypes = undefined | "button" | "submit" | "reset";

interface Props {
  /* className에 따른 style */
  style?: string;
  /* add bulma css framework */
  bulma?: string;
  /* event handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined;
  /* 버튼 이름 or 내용 */
  children: any;
  /* handle btn type (submit..) */
  type?: ButtonTypes;
}

const Button: React.FC<Props> = ({ style, ...props }) => {
  const { children, bulma } = props;

  return (
    <button className={cn("Button", bulma, style)} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  style: "",
  bulma: "",
  type: "button",
  onClick: undefined,
};

export default Button;
