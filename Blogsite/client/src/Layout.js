import Header from "./Header";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <main>
            <Header />
            <Outlet />
        </main>
    );
}

export default Layout;