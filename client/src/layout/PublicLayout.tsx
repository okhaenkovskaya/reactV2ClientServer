import { useState, useMemo, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { ThemeContext } from "../context/Contexts.ts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PromptScroll from "../components/PromptScroll";

interface PublicLayoutProps {
  children?: React.ReactNode | null;
}

interface pageTitles {
  [key: string]: any;
}

function PublicLayout({ children }: PublicLayoutProps) {
  const [theme, setTheme] = useState<string>("dark");

  const titles: pageTitles = useMemo(() =>({
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/blog": "Blog",
    "/blog/": "Post",
    "/login": "Login",
    "/register": "Register"
  }), []);

  const location = useLocation();

  useEffect(() => {
    titles[location.pathname] ? (
        document.title = titles[location.pathname]
    ) : (
        document.title = "My Title"
    )
  }, [location, titles])

  return (
    <ThemeContext.Provider value={theme}>
      <div className="page-wrapper">
        <Header setTheme={setTheme} theme={theme} />

        <PromptScroll />
        {children ?? <Outlet />}

        <Footer theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

PublicLayout.defaultProps = {
  children: null,
};

export default PublicLayout;
