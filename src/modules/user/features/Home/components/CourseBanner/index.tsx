import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import styled from "styled-components";
import Course from "../../../../components/Common/Course";
import useLocalization from "../../../../../../hooks/useLocalization";
import {ICourse} from "../../../../../../models/ICourse";
import {getCourses} from "../../repositories";
import {Grid, Box} from '@chakra-ui/react';

const CourseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 100px
`

const CourseContent = styled.div`
  margin-top: 50px;
  text-align: center;
`

const Slogan = styled.div`
  color: #6b6bf3;
  font-weight: bold;
  text-transform: uppercase;
`

const Title = styled.h1`
  font-weight: 600;
`

function CourseBanner() {

    const {trans} = useLocalization();

    const {data: courses} = useQuery('courses', async (): Promise<ICourse[]> => {
        return await getCourses();
    })


    const renderCourse = courses?.map(course => {
        return (
            <div key={course.id}
            >
                <Course course={course}/>
            </div>
        )
    })

    return (
        <div>
            <CourseWrapper>
                <CourseContent>
                    <Slogan>{trans('courseBanner.slogan')}</Slogan>
                    <Title>{trans('courseBanner.title')}</Title>
                </CourseContent>
            </CourseWrapper>

            <div>
                {/*<Grid templateColumns={'repeat(3,1fr)'} gap={4}>*/}
                {/*    {renderCourse}*/}
                {/*</Grid>*/}
                <div className={'grid grid-cols-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 '}>
                    {renderCourse}
                </div>
            </div>
        </div>
    )
}


export default CourseBanner;
