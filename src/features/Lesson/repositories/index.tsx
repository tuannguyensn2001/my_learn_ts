import {AxiosResponse} from "axios";
import {ICourse} from "../../../models/ICourse";
import {ILesson} from "../../../models/ILesson";
import {setIndexCourse} from "../../Course/repositories";
import {fetchCourse} from "../../Course/services";
import {fetchLessonBySlug} from "../services";


type User = {
    id: number,
    fullname: string,
    avatar: string,
}

export  type Comment = {
    id: number,
    content: string,
    commentable_id: number,
    user: User
}


export interface ILessonComment extends ILesson {
    comments: Comment[]
}


export const getLessonBySlug = async (course: string, lesson: string): Promise<ILessonComment> => {
    const response: AxiosResponse = await fetchLessonBySlug(course, lesson);
    return response.data.data;
}

export const getCourseBySlug = async (course: string): Promise<ICourse> => {
    const response: AxiosResponse = await fetchCourse(course);
    return setIndexCourse(response.data);
}