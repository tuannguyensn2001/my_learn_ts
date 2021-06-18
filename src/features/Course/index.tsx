import React, {useEffect} from 'react';
import {useQuery} from "react-query";
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../apps/store";
import {ToastStatus} from "../../defines/toast";
import {dispatchAddToCart} from "../Cart/slice";
import Body from "./components/Body";
import CourseDropdown from "./components/CourseDropdown";
import Header from "./components/Header";
import {getCourse} from "./repositories";
import Layout from "../../components/Layout";
import {Container, Box, Button, useToast} from '@chakra-ui/react';
import styled from 'styled-components';

const CourseWrapper = styled.div`
  color: red;
`

function CourseDetail() {

    const {course}: { course: string } = useParams();

    const toast = useToast();

    const dispatch = useAppDispatch();

    const {data: currentCourse} = useQuery(['course', course], async () => {
        return await getCourse(course);
    });

    const cart = useAppSelector(state => state.cart.courseList);

    const addToCart = () => {
        if (!cart.find(course => course.id === currentCourse?.id))
            dispatch(dispatchAddToCart({
                course_id: currentCourse?.id
            }))
                .then(() => {
                    toast({
                        title: 'Thêm vào giỏ hàng thành công',
                        status: ToastStatus.SUCCESS,
                        position: 'top-right'
                    })
                })
    }


    return (
        <Layout>


            <Container maxW={'container.lg'}>

                <Button onClick={addToCart}>Thêm vào giỏ hàng</Button>

                {currentCourse?.chapters?.map((chapter) => (
                    <CourseDropdown
                        key={chapter.id}
                        chapter={chapter}/>
                ))}
            </Container>
        </Layout>
    )
}

export default CourseDetail;