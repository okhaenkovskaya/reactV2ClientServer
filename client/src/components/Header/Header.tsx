import {useContext} from "react";
import { AuthContent } from "../../context/auth";


import Logo from "./Logo";
import Button from "../Button/Button";
import { NavList, NavItem } from "../Nav";

import style from "./Header.module.scss";
import {Link} from "react-router-dom";

const navList = [
  {
    id: 1,
    name: "About",
    path: "/about",
  },
  {
    id: 2,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
];

interface headerProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Header = ({ theme, setTheme }: headerProps) => {

  const context = useContext(AuthContent);

  return (
    <header
      className={
        theme === "dark"
          ? `${style.header}  ${style.darkTheme}`
          : `${style.header} ${style.pinkTheme}`
      }
    >
      <Logo to="/" classes={style.logo} />

      <NavList>
        {navList.map(({ id, name, path }) => (
          <NavItem key={id} to={path}>
            {name}
          </NavItem>
        ))}


        {context.user ? (
           <>
             <NavItem key='profile' to='/account/profile'>
               Profile
             </NavItem>
             <Link className={style.logOutButton} onClick={context.logout} key="logout" to='/'>
              LogOut
             </Link>
           </>
        ) : (
            <>
              <NavItem key='login' to='/login'>
                Login
              </NavItem>
              <NavItem key='register' to='/register'>
                Register
              </NavItem>
            </>
        )}

      </NavList>

      <div className={style.btnWrap}>
        <Button onClick={() => setTheme("dark")}>Theme dark</Button>
        <Button onClick={() => setTheme("pink")}>Theme Pink</Button>
        <Button to="/contact">Contact</Button>
      </div>
    </header>
  );
};

export default Header;
