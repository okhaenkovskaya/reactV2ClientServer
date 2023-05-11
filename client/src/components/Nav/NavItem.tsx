import { NavLink } from "react-router-dom";

import style from "./Nav.module.scss";

type Props = {
  children: React.ReactNode;
  to: string;
};

const NavItem = ({ children, to }: Props) => {
  return (
    <li className={style.menuItem}>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.menuLinkActive : style.menuLink
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
