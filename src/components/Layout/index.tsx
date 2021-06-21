import React from 'react';
import styled from "styled-components";
import Navbar from "./Navbar";

interface LayoutProps {
    children: JSX.Element | JSX.Element[] | undefined;
}

const Body = styled.div`
  height: calc(100% - 60px);
`

function Layout({children}: LayoutProps) {
    return (
        <div>
            <Navbar/>
            <Body>
                {children}
            </Body>
        </div>
    )
}

export default Layout;