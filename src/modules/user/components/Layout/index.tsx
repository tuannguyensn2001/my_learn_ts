import React from 'react';
import styled from "styled-components";
import Navbar from "./Navbar";
import {useRouteMatch} from "react-router-dom";

interface LayoutProps {
    children: JSX.Element | JSX.Element[] | undefined;
}


const Body = styled.div<{
    isFull: boolean
}>`
  margin-top: ${props => props.isFull ? '0px' : '60px'};
`

const Wrapper = styled.div`
  height: calc(100vh - 60px);
`

function Layout({children}: LayoutProps) {

    const {url} = useRouteMatch();

    return (
        <div>
            <Navbar/>
            <Body isFull={url === '/'}>
                <Wrapper
                >
                    {children}
                </Wrapper>
            </Body>
        </div>

    )
}

export default Layout;