import myLearnAPI from "../../../config/network";


export const fetchCourses = () => {
    return myLearnAPI.get('/api/v1/courses');
}