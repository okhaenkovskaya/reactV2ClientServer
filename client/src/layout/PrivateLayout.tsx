import {useEffect, useMemo, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/Contexts.ts";
import Sidebar from "../components/Sidebar";

interface PrivateLayoutProps {
  children?: React.ReactNode;
}

interface pageTitles {
    [key: string]: any;
}
function PrivateLayout({ children }: PrivateLayoutProps) {

    const titles: pageTitles= useMemo(() =>({
        "/account/profile": "Profile",
        "/account/dashboard": "Dashboard",
    }), []);

    const location = useLocation();

    useEffect(() => {
        titles[location.pathname] ? (
                document.title = titles[location.pathname]
            ) : (
            document.title = "My Title"
            )
    }, [location, titles])

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
