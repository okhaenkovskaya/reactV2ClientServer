import style from "./Nav.module.scss";

type Props = {
  children: React.ReactNode;
  classes?: string;
} & typeof defaultProps;

const defaultProps = {
  classes: style.menu,
};

const NavList = ({ children, classes }: Props) => {
  return <nav className={classes}>{children}</nav>;
};

NavList.defaultProps = defaultProps;

export default NavList;
