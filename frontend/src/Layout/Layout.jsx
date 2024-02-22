import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

const Layout = () => {
    const [viewSidebar, setViewSidebar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const updateView = () => {
        setViewSidebar(!viewSidebar);
    };
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                position: "fixed",
                width: "100%",
                overflow:"scroll"
              
            }}
        >
            <Sidebar viewSidebar={viewSidebar} updateView={updateView} />
            <div style={{ width: "100%" }}>
                <Header setViewSidebar={setViewSidebar} viewSidebar={viewSidebar} />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
