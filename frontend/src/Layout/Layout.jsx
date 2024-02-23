import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
    const [viewSidebar, setViewSidebar] = useState(false);

    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

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
