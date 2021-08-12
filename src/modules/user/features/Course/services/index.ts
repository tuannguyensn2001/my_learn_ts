import myLearnAPI from "../../../../../config/network";

export const fetchCourse = (slug: string) => {
    return myLearnAPI.get(`/v1/course/${slug}`);
}