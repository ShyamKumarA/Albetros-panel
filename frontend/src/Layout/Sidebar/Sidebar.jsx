import React from "react";
import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import AddLinkIcon from '@mui/icons-material/AddLink';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
const Sidebar = ({ viewSidebar, updateView }) => {

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
                <a o
                nClick={viewSidebar ? updateView : () => { }} href="#blogs">
                    <li>
                        <DashboardIcon />
                        Dashboard
                    </li>
                </a>
                <a onClick={viewSidebar ? updateView : () => {

                }} href="#blogs">
                    <li>
                        <ArticleIcon />
                        Blog
                    </li>
                </a>
                <a onClick={viewSidebar ? updateView : () => { }} href="#seo">
                    <li>
                        <AddLinkIcon />
                        SEO
                    </li>
                </a>
                <a onClick={viewSidebar ? updateView : () => { }} href="#profile">
                    <li>
                        <PersonIcon />
                        Profile
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default Sidebar;
