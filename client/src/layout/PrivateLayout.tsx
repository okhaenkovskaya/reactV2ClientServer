import {useState} from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/Contexts.ts";
import Sidebar from "../components/Sidebar";

interface PrivateLayoutProps {
  children?: React.ReactNode;
}

function PrivateLayout({ children }: PrivateLayoutProps) {
  const [theme, setTheme] = useState<string>("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="page-wrapper">
        <Header setTheme={setTheme} theme={theme} />

        <div className="page-container">
            <Sidebar />

            <div className="page-holder">
                {children ?? <Outlet />}
            </div>
        </div>

        <Footer theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

PrivateLayout.defaultProps = {
  children: null,
};

export default PrivateLayout;
