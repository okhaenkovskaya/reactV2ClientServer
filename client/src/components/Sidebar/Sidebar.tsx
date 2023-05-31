import style from "./Sidebar.module.scss";
import {NavItem, NavList} from "../Nav";

const navList = [
    {
        id: 1,
        name: "Profile",
        path: "/account/profile",
    },
    {
        id: 2,
        name: "Dashboard",
        path: "/account/dashboard",
    },
    {
        id: 3,
        name: "Contact",
        path: "/contact",
    },
];

const Sidebar = () =>  (
        <div className={style.sidebar}>
            <NavList classes={style.navigation}>
                {navList.map(({ id, name, path }) => (
                    <NavItem key={id} to={path}>
                        {name}
                    </NavItem>
                ))}
            </NavList>
        </div>
    );

export default Sidebar;
