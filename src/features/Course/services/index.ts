import myLearnAPI from "../../../config/network";

export const fetchCourse = (slug: string) => {
    return myLearnAPI.get(`/api/v1/course/${slug}`);
}