import React from "react";
import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import AddLinkIcon from '@mui/icons-material/AddLink';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from "react-router-dom";
const Sidebar = ({ viewSidebar, updateView }) => {
    const location = useLocation();
    const isLinkActive = (pathname, hash) => {
        // Check if the current pathname and hash match the given values
        return location.pathname === pathname && location.hash === hash;
    };
    return (
        <div className={viewSidebar ? "show-sidebar" : "sidebar"}>
            <div className={viewSidebar ? "viewSidebar" : ""}>
                <h1>Albetros</h1>
                {viewSidebar ? (
                    <CloseIcon onClick={updateView} style={{ color: "white" }} />
                ) : (
                    ""
                )}
            </div>

            <ul className="navlinks">
                <Link onClick={viewSidebar ? updateView : () => { }} to="/dashboard">
                    <li className={isLinkActive('/dashboard', '') ? 'selected' : ''}>
                        <DashboardIcon />
                        Dashboard
                    </li>
                </Link>
                <Link onClick={viewSidebar ? updateView : () => {

                }} to="/dashboard#blogs">
                    <li className={isLinkActive('/dashboard', '#blogs') ? 'selected' : ''}>
                        <ArticleIcon />
                        Blog
                    </li>
                </Link>
                <Link onClick={viewSidebar ? updateView : () => { }} to="/seo">
                    <li className={isLinkActive('/seo', '') ? 'selected' : ''}>
                        <AddLinkIcon />
                        SEO
                    </li>
                </Link>
                {/* <a onClick={viewSidebar ? updateView : () => { }} href="#profile">
                    <li>
                        <PersonIcon />
                        Profile
                    </li>
                </a> */}
            </ul>
        </div>
    );
};

export default Sidebar;
