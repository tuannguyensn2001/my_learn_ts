import myLearnAPI from "../../../config/network";
import {IComment} from "../../../models/IComment";

export const fetchLessonBySlug = (course: string, lesson: string) => {
    return myLearnAPI.get(`/api/v1/lesson/show/${course}/${lesson}`);
}

export const fetchCourseBySlug = (course: string) => {
    return myLearnAPI.get(`/api/v1/course/${course}`);
}

export const fetchPostComment = (data: Omit<IComment, 'id'>) => {
    return myLearnAPI.post('/api/v1/comments', {
        comment: data
    })
}