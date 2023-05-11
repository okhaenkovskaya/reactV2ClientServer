import { useState } from "react";
import { Outlet } from "react-router-dom";

import { ThemeContext } from "./Contexts.ts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PromptScroll from "../components/PromptScroll";

interface PublicLayoutProps {
  children?: React.ReactNode | null;
}

function PublicLayout({ children }: PublicLayoutProps) {
  const [theme, setTheme] = useState<string>("dark");

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
