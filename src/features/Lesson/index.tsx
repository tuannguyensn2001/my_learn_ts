import React from 'react';
import {useQuery} from "react-query";
import Layout from "../../components/Layout";
import ContentLesson from "./components/ContentLesson";
import {LessonProvider} from "./context";
import {useParams} from 'react-router-dom';
import {getLessonBySlug, getCourseBySlug} from "./repositories";
import styled from 'styled-components';
import Playlist from "./components/Playlist";


const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  display: flex;
`


function Lesson() {

    const {course, lesson}: { course: string, lesson: string } = useParams();

    const {
        data: currentLesson
    } = useQuery(['current_lesson', course, lesson], async () => {
        return await getLessonBySlug(course, lesson);
    });

    const {
        data: currentCourse
    } = useQuery(['current_course', course], async () => {
        return await getCourseBySlug(course);
    })

    return (
        <Layout>

            <LessonProvider value={{
                course: currentCourse ?? null,
                lesson: currentLesson ?? null
            }
            }>
                <ContentWrapper>
                    <ContentLesson url={currentLesson?.video_url ?? ''}/>
                    <Playlist width={25}/>
                </ContentWrapper>
            </LessonProvider>

        </Layout>
    )
}

export default Lesson;