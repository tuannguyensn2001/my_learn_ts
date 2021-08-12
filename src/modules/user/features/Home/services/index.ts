import myLearnAPI from "../../../../../config/network";


export const fetchCourses = () => {
    return myLearnAPI.get('/v1/courses');
}