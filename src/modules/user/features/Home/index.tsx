import React, {useEffect} from 'react';
import Layout from "../../components/Layout";
import Banner from "./components/Banner";
import CourseBanner from "./components/CourseBanner";
import {Container} from "@chakra-ui/react";

function Home() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <Layout>
            <div>
                <Banner/>
                <div className={'container'}>
                    <CourseBanner/>
                </div>
            </div>
        </Layout>
    )
}

export default Home;