import style from "./Footer.module.scss";

import { NavList, NavItem } from "../Nav";

interface footerProps {
  theme: string;
}

const Footer = ({ theme }: footerProps) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        theme === "dark"
          ? `${style.footer} ${style.darkTheme}`
          : `${style.footer} ${style.pinkTheme}`
      }
    >
      <NavList classes={style.footerMenu}>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/blog">Posts</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavList>
      <p className={style.copyright}>
        Copyright {year} Prokopenko. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
