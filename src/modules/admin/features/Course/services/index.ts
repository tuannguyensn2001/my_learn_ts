import myLearnAPI from "../../../../../config/network";

export const fetchCourseCreate = () => {
    return myLearnAPI.get('/v1/backend/courses/create');
}