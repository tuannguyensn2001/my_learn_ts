import React from 'react';
import Layout from "../../components/Layout";
import Banner from "./components/Banner";
import CourseBanner from "./components/CourseBanner";
import {Container} from "@chakra-ui/react";

function Home() {
    return (
        <Layout>
            <div>
                <Banner/>
                <Container maxW={'container.xl'}>
                    <CourseBanner/>
                </Container>
            </div>
        </Layout>
    )
}

export default Home;