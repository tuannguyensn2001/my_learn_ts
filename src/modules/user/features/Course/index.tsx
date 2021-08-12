import React, {useEffect} from 'react';
import {useQuery} from "react-query";
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../../../apps/store";
import {ToastStatus} from "../../../../defines/toast";
import {dispatchAddToCart} from "../Cart/slice";
import Body from "./components/Body";
import CourseDropdown from "./components/CourseDropdown";
import Header from './components/Header';
import {getCourse} from "./repositories";
import Layout from "../../components/Layout";
import {Container, Box, Button, useToast, Flex} from '@chakra-ui/react';
import styled from 'styled-components';
import Description from './components/Description';
import Instructor from './components/Instructor';
import {createBreakpoints} from '@chakra-ui/theme-tools';

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
                        position: 'top-right',
                    })
                })
    }


    return (
        <Layout>

            <Container maxW={'container.lg'}>
                {/*<Flex*/}
                {/*    flexDir='row-reverse'*/}
                {/*    bgColor='#ccc'*/}
                {/*    width='100%'>*/}
                {/*    <Button*/}
                {/*        position='fixed'*/}
                {/*        zIndex='1'*/}
                {/*        bottom='0'*/}
                {/*        right={{base: '0', sm: '0', md: 'inherit'}}*/}
                {/*        width={{base: '100%', sm: '100%', md: 'auto'}}*/}
                {/*        padding={{base: '2rem'}}*/}
                {/*        bgColor='#20cbf9'*/}
                {/*        color='#fff'*/}
                {/*        fontSize={{base: '1.5rem', sm: '1.3rem', md: '1rem'}}*/}
                {/*        borderRadius={{base: '0', sm: '0', md: 'md'}}*/}
                {/*        _hover={{*/}
                {/*            bgColor: '#00a9d6',*/}
                {/*            color: '#fff'*/}
                {/*        }}*/}
                {/*        onClick={addToCart}>Thêm vào giỏ hàng</Button>*/}
                {/*</Flex>*/}

                {/*<Body/>*/}
                {currentCourse?.chapters?.map((chapter) => (
                    <CourseDropdown
                        key={chapter.id}
                        chapter={chapter}/>
                ))}



                {/*<Description/>*/}
                {/*<Instructor/>*/}
            </Container>
        </Layout>
    )
}

export default CourseDetail;