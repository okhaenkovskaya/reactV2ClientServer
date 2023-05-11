import { Link } from "react-router-dom";

import style from "./Button.module.scss";

type Props = {
  children: JSX.Element | string;
  classes?: string;
  to?: string | undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
} & typeof defaultProps;

const defaultProps = {
  classes: style.button,
};

const Button = ({ children, classes, to, onClick, type }: Props) => {
  return to ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} type={type} className={classes}>
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
