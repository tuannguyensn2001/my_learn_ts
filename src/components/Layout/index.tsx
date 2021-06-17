import React from 'react';
import Navbar from "./Navbar";

interface LayoutProps {
    children: JSX.Element | JSX.Element[]
}


function Layout({children}: LayoutProps) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout;