import React from 'react';
import {Link} from 'react-router-dom';
import {ICourse} from "../../../../../models/ICourse";
import styles from "./styled";
import {BsPeopleFill} from "react-icons/all";
import style from './style.module.scss';

const {
    CourseItem,
    ThumbnailWrapper,
    Thumbnail,
    Category,
    ContentWrapper,
    Title,
    Instructor,
    Info,
    User,
    Price
} = styles;

interface CourseProps {
    course: Pick<ICourse, 'name' | 'slug' | 'price' | 'tag' | 'media' | 'description'>
}


function Course({course}: CourseProps) {

    return (
        <CourseItem>
            <ThumbnailWrapper>
                <Link to={`/course/${course.slug}`}>
                    <Thumbnail src={course?.media?.source}/>
                </Link>
                <Category to={'/'}>{course?.tag?.category?.name}</Category>
            </ThumbnailWrapper>
            <ContentWrapper>
                <div>
                    <Title to={`/course/${course.slug}`}>{course.name}</Title>
                </div>
                {/*<Instructor>*/}
                {/*    Giáo viên đó*/}
                {/*</Instructor>*/}
                <span className={style.description}>{course.description}</span>

                <Info>
                    <User className={style.user}>
                        <BsPeopleFill/>
                        <p>2300</p>
                    </User>
                    <Price>{course.price}</Price>
                </Info>

            </ContentWrapper>
        </CourseItem>
    )
}

export default Course;