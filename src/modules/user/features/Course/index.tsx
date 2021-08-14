import React, {useEffect} from 'react';
import {useQuery} from "react-query";
import {useParams} from 'react-router-dom';
import {getCourse} from "./repositories";
import Layout from "../../components/Layout";
import styled from 'styled-components';



function CourseDetail() {

    const {course}: { course: string } = useParams();

    useEffect(() => {


    },[]);

    const {data: currentCourse} = useQuery(['course', course], async () => {
        return await getCourse(course);
    });


    return (
        <Layout>


        </Layout>
    )
}

export default CourseDetail;