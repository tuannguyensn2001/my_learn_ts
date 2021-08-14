import myLearnAPI from "../../../config/network";

export const fetchTags = () => {
    return myLearnAPI.get('/v1/tags');
}